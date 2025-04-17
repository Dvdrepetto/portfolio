'use client'

import { ContactFormSchema } from '@/lib/schemas'
import { z } from 'zod'

type VolunteerInputs = z.infer<typeof ContactFormSchema>

export async function sendEmail(data: VolunteerInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (!result.success) {
    return { error: result.error.format() }
  }

  try {
    const response = await fetch('/api/volunteer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result.data)
    })

    if (!response.ok) {
      throw new Error('Failed to submit')
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}
