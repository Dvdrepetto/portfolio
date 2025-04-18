// lib/actions.ts
import { VolunteerFormSchema, VolunteerInputs } from '@/lib/schemas'

export type VolunteerResult = 
  | { ok: true; id?: string }
  | { error: string }

export async function sendVolunteer(data: VolunteerInputs): Promise<VolunteerResult> {
  // 1) Validación Zod
  const parsed = VolunteerFormSchema.safeParse(data)
  if (!parsed.success) {
    return { error: 'Invalid form data' }
  }

  // 2) Muestra en consola lo que vas a enviar (payload)
  console.log('📨 Sending to /api/volunteer:', parsed.data)

  try {
    const response = await fetch('/api/volunteer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed.data),
    })
    const body = await response.json()
    console.log('📬 Response from /api/volunteer:', body)

    // 3) Maneja errores de status
    if (!response.ok) {
      // body.error podría ser un objeto o string
      const err = typeof body.error === 'string'
        ? body.error
        : JSON.stringify(body.error)
      return { error: err }
    }

    // 4) Éxito (usamos `ok` para coincidir con tu API)
    return { ok: true, id: body.id }
  } catch (e: any) {
    console.error('❌ Network or unexpected error:', e)
    return { error: e.message || 'Network error' }
  }
}
