import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { VolunteerInputs, VolunteerFormSchema } from '@/lib/schemas'
import { saveVolunteerToFirestore } from '@/lib/saveVolunteers'

export async function POST(req: NextRequest) {
    const body = await req.json() as VolunteerInputs

    const result = VolunteerFormSchema.safeParse(body)

    if (!result.success) {
        return NextResponse.json({ error: result.error.format() }, { status: 400 })
    }

    const saved = await saveVolunteerToFirestore(result.data)
    if (saved.error) {
        return NextResponse.json({ error: saved.error }, { status: 500 })
    }

    return NextResponse.json({ ok: true, id: saved.id }, { status: 200 })
}
