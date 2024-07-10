import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  brand: z.string().min(2).max(100),
  type: z.string().min(2).max(50),
  abv: z.string().min(2).max(50),
  ibu: z.string().min(2).max(50),
  volume: z.string().min(2).max(50),
  price: z.string().min(2).max(50),
  origin: z.string().min(2).max(100),
  photo: z.string().min(2).max(100),
  isPublish: z.boolean(),
});
