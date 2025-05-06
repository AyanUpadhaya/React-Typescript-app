//only difference between types and interface is user of  = sign
import { z } from "zod";
export interface Student {
  name: string;
  age: number;
  roll: number;
  subject: string;
}

export type Programmer = {
  name: string;
  languages: string[];
};

export enum UserResponse {
  No = 0,
  Yes = 1,
}

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, "Must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });

export type TsignUpSchema = z.infer<typeof signUpSchema>;