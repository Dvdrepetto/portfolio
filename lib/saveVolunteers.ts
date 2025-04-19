// lib/saveVolunteers.ts
import { getApps, initializeApp } from 'firebase-admin/app'
import { VolunteerInputs } from '@/lib/schemas'
import * as admin from 'firebase-admin';

// Inicializa el Admin SDK UNA sola vez
if (!getApps().length) {
    initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
            clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
    });
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
        return { success: false, error: e.message }
    }
}
