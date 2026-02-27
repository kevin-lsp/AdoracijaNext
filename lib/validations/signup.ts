import { z } from 'zod';

export const signupSchema = z.object({
  firstName: z.string().min(2, 'Ime mora imeti vsaj 2 znaka'),
  lastName: z.string().min(2, 'Priimek mora imeti vsaj 2 znaka'),
  email: z.string().email('Neveljaven email naslov'),
  phone: z.string().regex(/^[0-9\s\-\+\(\)]+$/, 'Neveljaven telefonski številka'),
  diocese: z.enum(['LJUBLJANA', 'MARIBOR', 'CELJE', 'KOPER', 'NOVO_MESTO', 'MURSKA_SOBOTA']).optional(),
  message: z.string().optional(),
});

export type SignupFormData = z.infer<typeof signupSchema>;
