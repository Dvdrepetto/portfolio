// lib/firebaseAdmin.ts
import admin from 'firebase-admin'
import { getApps } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import serviceAccount from '../firebase/serviceAccountKey.json'

if (!getApps().length) {
    if (process.env.NODE_ENV === 'development') {
        // En local: usa el JSON descargado
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
        })
    } else {
        // En producción (Vercel): usa las env vars
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.FIREBASE_ADMIN_PROJECT_ID!,
                clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL!,
                privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY!.replace(/\\n/g, '\n'),
            }),
        })
    }
}

export const adminDb = getFirestore()
