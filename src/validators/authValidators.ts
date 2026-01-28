import { z } from 'zod';

export const sigupSchema = z.object({
    name: z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be at most 50 characters'),
    email: z.string()
        .min(1, "Email is required")
        .email('Please enter a valid email address')
        .toLowerCase(),
    password: z.string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain one uppercase letter')
        .regex(/[a-z]/, 'Password must contain one lowercase letter')
        .regex(/[0-9]/, 'Password must contain one number'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
});

export const loginSchema = z.object({
    email: z.string()
        .min(1, "Email is required")
        .email('Please enter a valid email address')
        .toLowerCase(),
    password: z.string()
        .min(8, 'Password must be at least 8 characters'),
});