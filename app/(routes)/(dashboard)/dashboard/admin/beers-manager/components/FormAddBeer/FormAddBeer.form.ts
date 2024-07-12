import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  brewery: z.string().min(2).max(100),
  style: z.string().min(2).max(50),
  family: z.string().min(2).max(50),
  tp: z.string().min(2).max(100),
  categories: z.string().min(2).max(100),
  abv: z.string().min(2).max(50),
  ibu: z.string().min(2).max(50),
  volume: z.string().min(2).max(50),
  price: z.string().min(2).max(50),
  origin: z.string().min(2).max(100),
  photo: z.string().min(2).max(100),
  isPublish: z.boolean(),
});

