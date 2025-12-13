import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/lib/i18n';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { apiRequest } from '@/lib/queryClient';

const WEEKDAYS_DE = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
const MONTHS_DE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

function CalendarGrid({ selectedDate, onSelectDate, currentMonth, onChangeMonth }: {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  currentMonth: Date;
  onChangeMonth: (delta: number) => void;
}) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const startDay = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();
  
  const days: (Date | null)[] = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(new Date(year, month, day));
  }
  
  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };
  
  const isPast = (date: Date) => {
    return date < today;
  };
  
  const isSelected = (date: Date) => {
    if (!selectedDate) return false;
    return date.toDateString() === selectedDate.toDateString();
  };
  
  const isToday = (date: Date) => {
    return date.toDateString() === today.toDateString();
  };

  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onChangeMonth(-1)}
          className="text-slate-400 hover:text-white"
          data-testid="button-prev-month"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <h3 className="text-lg font-semibold text-white">
          {MONTHS_DE[month]} {year}
        </h3>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onChangeMonth(1)}
          className="text-slate-400 hover:text-white"
          data-testid="button-next-month"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {WEEKDAYS_DE.map((day, i) => (
          <div
            key={day}
            className={`text-center text-sm font-medium py-2 ${
              i === 0 || i === 6 ? 'text-red-400' : 'text-slate-400'
            }`}
          >
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days.map((date, index) => {
          if (!date) {
            return <div key={`empty-${index}`} className="p-2" />;
          }
          
          const disabled = isPast(date) || isWeekend(date);
          const selected = isSelected(date);
          const todayDate = isToday(date);
          const weekend = isWeekend(date);
          
          return (
            <button
              key={date.toISOString()}
              onClick={() => !disabled && onSelectDate(date)}
              disabled={disabled}
              data-testid={`calendar-day-${date.getDate()}`}
              className={`
                p-2 text-center rounded-lg transition-all text-sm
                ${disabled 
                  ? 'text-slate-600 cursor-not-allowed' 
                  : 'hover:bg-cyan-500/20 cursor-pointer'
                }
                ${weekend ? 'text-red-400/50' : ''}
                ${selected 
                  ? 'bg-cyan-500 text-white font-semibold' 
                  : ''
                }
                ${todayDate && !selected 
                  ? 'ring-2 ring-cyan-500 text-cyan-400' 
                  : ''
                }
                ${!disabled && !selected && !todayDate 
                  ? 'text-white' 
                  : ''
                }
              `}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
      
      <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-400/50 rounded" />
          <span>Geschlossen (Sa/So)</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-cyan-500 rounded" />
          <span>Ausgewählt</span>
        </div>
      </div>
    </div>
  );
}

function TimeSlots({ date, selectedTime, onSelectTime }: {
  date: Date;
  selectedTime: string | null;
  onSelectTime: (time: string) => void;
}) {
  const dateStr = date.toISOString().split('T')[0];
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['calendar-slots', dateStr],
    queryFn: async () => {
      const response = await fetch(`/api/calendar/slots?date=${dateStr}`);
      if (!response.ok) throw new Error('Failed to fetch slots');
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-cyan-400" />
          Verfügbare Zeiten
        </h3>
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full" />
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-cyan-400" />
          Verfügbare Zeiten
        </h3>
        <div className="flex items-center gap-2 text-red-400">
          <AlertCircle className="w-5 h-5" />
          <span>Zeiten konnten nicht geladen werden</span>
        </div>
      </div>
    );
  }

  const slots = data.slots || [];

  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <Clock className="w-5 h-5 text-cyan-400" />
        Verfügbare Zeiten
      </h3>
      
      {data.message ? (
        <div className="text-center py-4 text-slate-400">
          <p>{data.message}</p>
        </div>
      ) : slots.length === 0 ? (
        <div className="text-center py-4 text-slate-400">
          <p>Keine verfügbaren Zeiten an diesem Tag</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {slots.map((time: string) => (
            <button
              key={time}
              onClick={() => onSelectTime(time)}
              data-testid={`time-slot-${time}`}
              className={`
                px-4 py-3 rounded-lg text-sm font-medium transition-all
                ${selectedTime === time
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }
              `}
            >
              {time} Uhr
            </button>
          ))}
        </div>
      )}
      
      <p className="mt-4 text-xs text-slate-500 text-center">
        Öffnungszeiten: {data.businessHours}
      </p>
    </div>
  );
}

export default function Termin() {
  const { t } = useLanguage();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const bookingMutation = useMutation({
    mutationFn: async (data: {
      date: string;
      time: string;
      name: string;
      email: string;
      phone?: string;
      message?: string;
    }) => {
      const res = await apiRequest('POST', '/api/calendar/book', data);
      return res.json();
    },
    onSuccess: () => {
      setBookingSuccess(true);
    },
  });

  const handleChangeMonth = (delta: number) => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      newMonth.setMonth(newMonth.getMonth() + delta);
      return newMonth;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;

    bookingMutation.mutate({
      date: selectedDate.toISOString().split('T')[0],
      time: selectedTime,
      name: formData.name,
      email: formData.email,
      phone: formData.phone || undefined,
      message: formData.message || undefined,
    });
  };

  const formatSelectedDate = () => {
    if (!selectedDate) return '';
    const day = selectedDate.getDate();
    const month = MONTHS_DE[selectedDate.getMonth()];
    const year = selectedDate.getFullYear();
    const weekday = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'][selectedDate.getDay()];
    return `${weekday}, ${day}. ${month} ${year}`;
  };

  if (bookingSuccess) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="max-w-2xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 text-center"
            >
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-400" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-4">
                Termin erfolgreich gebucht!
              </h1>
              <p className="text-slate-400 mb-2">
                <strong className="text-white">{formatSelectedDate()}</strong> um <strong className="text-white">{selectedTime} Uhr</strong>
              </p>
              <p className="text-slate-400 mb-6">
                Sie erhalten in Kürze eine Bestätigung per E-Mail an <strong className="text-cyan-400">{formData.email}</strong>
              </p>
              <Button
                onClick={() => {
                  setBookingSuccess(false);
                  setSelectedDate(null);
                  setSelectedTime(null);
                  setFormData({ name: '', email: '', phone: '', message: '' });
                }}
                className="bg-cyan-500 hover:bg-cyan-600"
                data-testid="button-new-booking"
              >
                Weiteren Termin buchen
              </Button>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm mb-4">
              <Calendar className="w-4 h-4" />
              Kostenlose Erstberatung
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Termin <span className="text-cyan-400">buchen</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Wählen Sie einen passenden Termin für Ihr kostenloses Beratungsgespräch. 
              Wir sind Montag bis Freitag von 08:00 bis 17:00 Uhr für Sie da.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Calendar & Time Slots */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <CalendarGrid
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
                currentMonth={currentMonth}
                onChangeMonth={handleChangeMonth}
              />
              
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <TimeSlots
                    date={selectedDate}
                    selectedTime={selectedTime}
                    onSelectTime={setSelectedTime}
                  />
                </motion.div>
              )}
            </motion.div>

            {/* Right Column - Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-6">
                  Ihre Kontaktdaten
                </h3>
                
                {selectedDate && selectedTime && (
                  <div className="mb-6 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                    <p className="text-cyan-400 text-sm font-medium">Ausgewählter Termin:</p>
                    <p className="text-white font-semibold">{formatSelectedDate()}</p>
                    <p className="text-white">{selectedTime} Uhr</p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">
                      <User className="w-4 h-4 inline mr-1" />
                      Name *
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Ihr Name"
                      className="bg-slate-700 border-slate-600 text-white"
                      data-testid="input-name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">
                      <Mail className="w-4 h-4 inline mr-1" />
                      E-Mail *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="ihre@email.de"
                      className="bg-slate-700 border-slate-600 text-white"
                      data-testid="input-email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Telefon (optional)
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="+49 ..."
                      className="bg-slate-700 border-slate-600 text-white"
                      data-testid="input-phone"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">
                      <MessageSquare className="w-4 h-4 inline mr-1" />
                      Nachricht (optional)
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Worum geht es bei Ihrem Anliegen?"
                      rows={3}
                      className="bg-slate-700 border-slate-600 text-white resize-none"
                      data-testid="input-message"
                    />
                  </div>
                  
                  {bookingMutation.error && (
                    <div className="flex items-center gap-2 p-3 bg-red-500/10 rounded-lg text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{(bookingMutation.error as Error).message || 'Ein Fehler ist aufgetreten'}</span>
                    </div>
                  )}
                  
                  <Button
                    type="submit"
                    disabled={!selectedDate || !selectedTime || !formData.name || !formData.email || bookingMutation.isPending}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-600 disabled:cursor-not-allowed"
                    data-testid="button-book"
                  >
                    {bookingMutation.isPending ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Wird gebucht...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4 mr-2" />
                        Termin buchen
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-slate-500 text-center">
                    * Pflichtfelder. Ihre Daten werden gemäß unserer Datenschutzerklärung verarbeitet.
                  </p>
                </form>
              </div>
              
              {/* Business Hours Info */}
              <div className="mt-6 p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                <h4 className="text-white font-medium mb-2">Öffnungszeiten</h4>
                <div className="text-sm text-slate-400 space-y-1">
                  <p>Montag - Freitag: <span className="text-white">08:00 - 17:00 Uhr</span></p>
                  <p>Samstag & Sonntag: <span className="text-red-400">Geschlossen</span></p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
