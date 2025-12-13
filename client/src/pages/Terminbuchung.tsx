import { memo, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, CheckCircle, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { SEOHead } from "@/components/SEOHead";

const SERVICES = [
  { value: "ki-agenten", labelKey: "optionKI" },
  { value: "automatisierung", labelKey: "optionAutomation" },
  { value: "webseite", labelKey: "optionWeb" },
  { value: "marketing", labelKey: "optionMarketing" },
  { value: "beratung", labelKey: "optionConsulting" },
];

function Terminbuchung() {
  const { t } = useLanguage();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableSlots, setAvailableSlots] = useState<{ time: string; available: boolean }[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const tb = t.terminbuchungPage || {
    badge: "Termin buchen",
    title: "Beratungstermin vereinbaren",
    subtitle: "Wählen Sie einen passenden Termin für Ihr kostenloses Erstgespräch.",
    step1: "Datum wählen",
    step2: "Uhrzeit wählen",
    step3: "Daten eingeben",
    nameLabel: "Name *",
    emailLabel: "E-Mail *",
    phoneLabel: "Telefon",
    serviceLabel: "Interesse an *",
    messageLabel: "Nachricht",
    namePlaceholder: "Ihr Name",
    emailPlaceholder: "ihre@email.de",
    phonePlaceholder: "+49 ...",
    messagePlaceholder: "Worum geht es in Ihrem Projekt?",
    selectPlaceholder: "Bitte wählen...",
    optionKI: "KI-Agenten",
    optionAutomation: "Automatisierungen",
    optionWeb: "Webseiten mit KI",
    optionMarketing: "Performance Marketing",
    optionConsulting: "Allgemeine Beratung",
    submitButton: "Termin buchen",
    backButton: "Zurück",
    nextButton: "Weiter",
    noSlots: "Keine Termine verfügbar",
    thankYouTitle: "Termin gebucht!",
    thankYouMessage: "Wir haben Ihren Termin bestätigt und senden Ihnen eine Kalendereinladung per E-Mail.",
    errorMessage: "Fehler bei der Buchung. Bitte versuchen Sie es erneut."
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: (Date | null)[] = [];
    
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }
    
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(year, month, d));
    }
    
    return days;
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const isDateSelectable = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const day = date.getDay();
    return date >= today && day !== 0 && day !== 6;
  };

  const handleDateSelect = async (date: Date) => {
    const dateStr = formatDate(date);
    setSelectedDate(dateStr);
    setSelectedTime(null);
    setIsLoadingSlots(true);
    setError(null);

    try {
      const response = await fetch(`/api/appointments/slots?date=${dateStr}`);
      const data = await response.json();
      setAvailableSlots(data.slots || []);
      setStep(2);
    } catch (err) {
      setError("Fehler beim Laden der Termine");
      setAvailableSlots([]);
    } finally {
      setIsLoadingSlots(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      date: selectedDate,
      time: selectedTime,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/appointments/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Buchung fehlgeschlagen');
      }

      setStep(3);
    } catch (err: any) {
      setError(err.message || tb.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const days = getDaysInMonth(currentMonth);
  const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  const dayNames = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead
        title="Termin buchen | Kostenlose KI-Beratung München & Deutschlandweit | ExtruCon"
        description="Buchen Sie jetzt Ihren kostenlosen Beratungstermin bei ExtruCon GmbH. KI-Agenten, Automatisierung, Chatbots und Webentwicklung – München & deutschlandweit. Online-Terminbuchung 24/7."
        keywords="KI Beratung Termin buchen, kostenlose Erstberatung München, Automatisierung Beratung Bayern, Chatbot Entwicklung Termin, KI Agentur Fürstenfeldbruck"
        canonical="https://extrucon.de/terminbuchung"
      />
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                <Calendar className="w-4 h-4 inline mr-2" />
                {tb.badge}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                {tb.title}
              </h1>
              <p className="text-lg text-gray-400">
                {tb.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-white' : 'bg-white/10 text-gray-400'}`}>
                  1
                </div>
                <div className={`w-16 h-1 ${step >= 2 ? 'bg-primary' : 'bg-white/10'}`} />
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-white' : 'bg-white/10 text-gray-400'}`}>
                  2
                </div>
                <div className={`w-16 h-1 ${step >= 3 ? 'bg-primary' : 'bg-white/10'}`} />
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary text-white' : 'bg-white/10 text-gray-400'}`}>
                  3
                </div>
              </div>
            </div>

            {step === 3 && selectedDate && selectedTime ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-card/30 border border-white/10 text-center"
              >
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-white mb-4">{tb.thankYouTitle}</h2>
                <p className="text-gray-400 text-lg mb-6">{tb.thankYouMessage}</p>
                <div className="inline-flex items-center gap-4 bg-white/5 rounded-lg px-6 py-4">
                  <Calendar className="w-6 h-6 text-primary" />
                  <span className="text-white font-medium">{selectedDate}</span>
                  <Clock className="w-6 h-6 text-primary ml-4" />
                  <span className="text-white font-medium">{selectedTime} Uhr</span>
                </div>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-6 rounded-2xl bg-card/30 border border-white/10"
                >
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    {tb.step1}
                  </h2>
                  
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      data-testid="button-prev-month"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-400" />
                    </button>
                    <span className="text-white font-medium">
                      {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                    </span>
                    <button
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      data-testid="button-next-month"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {dayNames.map(day => (
                      <div key={day} className="text-center text-gray-500 text-sm py-2">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {days.map((day, i) => (
                      <div key={i} className="aspect-square">
                        {day ? (
                          <button
                            onClick={() => isDateSelectable(day) && handleDateSelect(day)}
                            disabled={!isDateSelectable(day) || isLoadingSlots}
                            className={`w-full h-full rounded-lg flex items-center justify-center text-sm transition-colors ${
                              selectedDate === formatDate(day)
                                ? 'bg-primary text-white'
                                : isDateSelectable(day)
                                ? 'hover:bg-white/10 text-white'
                                : 'text-gray-600 cursor-not-allowed'
                            }`}
                            data-testid={`button-date-${formatDate(day)}`}
                          >
                            {day.getDate()}
                          </button>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-6 rounded-2xl bg-card/30 border border-white/10"
                >
                  {step === 1 && (
                    <div className="h-full flex items-center justify-center text-gray-400">
                      <p>Wählen Sie zuerst ein Datum</p>
                    </div>
                  )}

                  {step === 2 && selectedDate && (
                    <>
                      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-primary" />
                        {tb.step2}
                      </h2>

                      {isLoadingSlots ? (
                        <div className="flex items-center justify-center py-8">
                          <Loader2 className="w-8 h-8 animate-spin text-primary" />
                        </div>
                      ) : availableSlots.length === 0 ? (
                        <p className="text-gray-400 text-center py-8">{tb.noSlots}</p>
                      ) : (
                        <div className="grid grid-cols-3 gap-2 mb-6">
                          {availableSlots.map(slot => (
                            <button
                              key={slot.time}
                              onClick={() => slot.available && setSelectedTime(slot.time)}
                              disabled={!slot.available}
                              className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                                selectedTime === slot.time
                                  ? 'bg-primary text-white'
                                  : slot.available
                                  ? 'bg-white/5 text-white hover:bg-white/10'
                                  : 'bg-white/5 text-gray-600 cursor-not-allowed line-through'
                              }`}
                              data-testid={`button-time-${slot.time}`}
                            >
                              {slot.time}
                            </button>
                          ))}
                        </div>
                      )}

                      {selectedTime && (
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <h3 className="text-lg font-semibold text-white">{tb.step3}</h3>
                          
                          <div>
                            <Label htmlFor="name" className="text-gray-300">{tb.nameLabel}</Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder={tb.namePlaceholder}
                              required
                              className="bg-white/5 border-white/10 text-white mt-1"
                              data-testid="input-name"
                            />
                          </div>

                          <div>
                            <Label htmlFor="email" className="text-gray-300">{tb.emailLabel}</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder={tb.emailPlaceholder}
                              required
                              className="bg-white/5 border-white/10 text-white mt-1"
                              data-testid="input-email"
                            />
                          </div>

                          <div>
                            <Label htmlFor="phone" className="text-gray-300">{tb.phoneLabel}</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder={tb.phonePlaceholder}
                              className="bg-white/5 border-white/10 text-white mt-1"
                              data-testid="input-phone"
                            />
                          </div>

                          <div>
                            <Label htmlFor="service" className="text-gray-300">{tb.serviceLabel}</Label>
                            <select
                              id="service"
                              name="service"
                              required
                              className="w-full mt-1 px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white"
                              data-testid="select-service"
                            >
                              <option value="" className="bg-gray-900">{tb.selectPlaceholder}</option>
                              {SERVICES.map(s => (
                                <option key={s.value} value={s.value} className="bg-gray-900">
                                  {(tb as any)[s.labelKey] || s.value}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <Label htmlFor="message" className="text-gray-300">{tb.messageLabel}</Label>
                            <Textarea
                              id="message"
                              name="message"
                              placeholder={tb.messagePlaceholder}
                              rows={3}
                              className="bg-white/5 border-white/10 text-white mt-1"
                              data-testid="input-message"
                            />
                          </div>

                          {error && (
                            <p className="text-red-400 text-sm">{error}</p>
                          )}

                          <div className="flex gap-3">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => {
                                setStep(1);
                                setSelectedTime(null);
                              }}
                              className="flex-1"
                              data-testid="button-back"
                            >
                              {tb.backButton}
                            </Button>
                            <Button
                              type="submit"
                              disabled={isSubmitting}
                              className="flex-1 bg-primary hover:bg-primary/90"
                              data-testid="button-submit"
                            >
                              {isSubmitting ? (
                                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                              ) : null}
                              {tb.submitButton}
                            </Button>
                          </div>
                        </form>
                      )}
                    </>
                  )}
                </motion.div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default memo(Terminbuchung);
