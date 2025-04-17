'use client'

import { VolunteerFormSchema } from '@/lib/schemas'
import { z } from 'zod'

type VolunteerInputs = z.infer<typeof VolunteerFormSchema>

export async function joinVolunteer(data: VolunteerInputs) {
  const result = VolunteerFormSchema.safeParse(data)

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
