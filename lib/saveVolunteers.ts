// lib/saveVolunteers.ts
import { db } from './firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { VolunteerInputs } from './schemas'

export async function saveVolunteerToFirestore(data: VolunteerInputs) {
    const payload = {
        ...data,
        createdAt: serverTimestamp(),
    }

    // Auditoría: imprime cada campo y su tipo
    console.log('📦 Payload to save:')
    Object.entries(payload).forEach(([key, value]) => {
        console.log(`  • ${key}:`, value, `(${typeof value})`)
    })

    try {
        console.log('🧪 Final payload sent to Firestore:', JSON.stringify(payload, null, 2))
        const docRef = await addDoc(collection(db, 'volunteers'), payload)
        return { success: true, id: docRef.id } 
    
        
    } catch (error: any) {
        console.error('❌ Firestore error:', error)
        return { error: error.message || 'Error saving to Firestore' }
    }
}


