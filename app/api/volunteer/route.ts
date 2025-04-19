// app/api/volunteer/route.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { VolunteerFormSchema, VolunteerInputs } from '@/lib/schemas'
import { adminDb } from '@/lib/firebase'
import admin from 'firebase-admin';

export async function POST(req: NextRequest) {
    const body = (await req.json()) as VolunteerInputs
    const parsed = VolunteerFormSchema.safeParse(body)
    if (!parsed.success) {
        return NextResponse.json({ error: parsed.error.format() }, { status: 400 })
    }
    try {
        const docRef = await adminDb.collection('volunteers').add({
            ...parsed.data,
            createdAt: admin.firestore.Timestamp.now(),
        })
        return NextResponse.json({ ok: true, id: docRef.id }, { status: 200 })
    } catch (e: any) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
