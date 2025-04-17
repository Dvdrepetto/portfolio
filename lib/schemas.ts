import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  city: z.string().optional(),
  availability: z.string().min(1, 'Please tell us your availability')
})

export type VolunteerInputs = z.infer<typeof ContactFormSchema>
