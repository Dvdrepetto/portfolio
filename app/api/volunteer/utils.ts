import fs from 'fs/promises'
import path from 'path'
import { VolunteerInputs } from '@/lib/schemas'

export async function saveVolunteerToFile(data: VolunteerInputs) {
    const filePath = path.join(process.cwd(), 'data', 'volunteers.json')

    try {
        const fileContent = await fs.readFile(filePath, 'utf-8')
        const volunteers = JSON.parse(fileContent)

        volunteers.push({
            ...data,
            createdAt: new Date().toISOString()
        })

        await fs.writeFile(filePath, JSON.stringify(volunteers, null, 2))

        return { success: true }
    } catch (error: any) {
        return { error: error.message || 'Error saving to file' }
    }
}
