import { type User, type InsertUser, type Appointment, type InsertAppointment, users, appointments } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointmentsByDate(date: string): Promise<Appointment[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const [appointment] = await db.insert(appointments).values({
      date: insertAppointment.date,
      time: insertAppointment.time,
      name: insertAppointment.name,
      email: insertAppointment.email,
      phone: insertAppointment.phone ?? null,
      service: insertAppointment.service,
      message: insertAppointment.message ?? null,
      googleEventId: insertAppointment.googleEventId ?? null,
    }).returning();
    return appointment;
  }

  async getAppointmentsByDate(date: string): Promise<Appointment[]> {
    return db.select().from(appointments).where(eq(appointments.date, date));
  }
}

export const storage = new DatabaseStorage();
