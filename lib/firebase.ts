import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Verificar si las variables de entorno están configuradas correctamente
const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY 
    ? process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, '\n')
    : undefined;

if (!privateKey) {
    throw new Error('FIREBASE_ADMIN_PRIVATE_KEY is undefined or empty');
}

if (!getApps().length) {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_ADMIN_PROJECT_ID!,
            clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL!,
            privateKey: privateKey,
        }),
    });
}

export const adminDb = getFirestore();
