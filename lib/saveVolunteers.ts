// lib/saveVolunteers.ts
import admin from 'firebase-admin'
import { getApps, cert } from 'firebase-admin/app'
import { VolunteerInputs } from '@/lib/schemas'

// Inicializa el Admin SDK UNA sola vez
if (!getApps().length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
            clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
    })
}

const db = admin.firestore()

export interface SaveVolunteerResult {
    success: boolean
    id?: string
    error?: string
}

export async function saveVolunteerToFirestore(
    data: VolunteerInputs
): Promise<SaveVolunteerResult> {
    try {
        const docRef = await db.collection('volunteers').add({
            ...data,
            createdAt: admin.firestore.Timestamp.now(),
        })
        return { success: true, id: docRef.id }
    } catch (e: any) {
        console.error('❌ Error saving volunteer to Firestore:', e)
        return { success: false, error: e.message }
    }
}
