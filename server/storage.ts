import { type User, type InsertUser, type Appointment, type InsertAppointment } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointmentsByDate(date: string): Promise<Appointment[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private appointments: Map<string, Appointment>;

  constructor() {
    this.users = new Map();
    this.appointments = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = randomUUID();
    const appointment: Appointment = { 
      id,
      date: insertAppointment.date,
      time: insertAppointment.time,
      name: insertAppointment.name,
      email: insertAppointment.email,
      phone: insertAppointment.phone ?? null,
      service: insertAppointment.service,
      message: insertAppointment.message ?? null,
      googleEventId: insertAppointment.googleEventId ?? null,
      createdAt: new Date() 
    };
    this.appointments.set(id, appointment);
    return appointment;
  }

  async getAppointmentsByDate(date: string): Promise<Appointment[]> {
    return Array.from(this.appointments.values()).filter(
      (appointment) => appointment.date === date
    );
  }
}

export const storage = new MemStorage();
