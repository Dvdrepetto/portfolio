import fs from 'fs/promises'
import path from 'path'
import { VolunteerInputs } from '@/lib/schemas'

export async function saveVolunteerToFile(data: VolunteerInputs) {
    const filePath = path.join(process.cwd(), 'data', 'volunteers.json')

    try {
        // Asegurarse de que la carpeta 'data' exista
        await fs.mkdir(path.dirname(filePath), { recursive: true })

        let fileContent = '[]' // Valor predeterminado si el archivo no existe
        try {
            fileContent = await fs.readFile(filePath, 'utf-8')
        } catch (err) {
            console.log('Archivo no encontrado, creando archivo vacío.')
        }

        const volunteers = JSON.parse(fileContent)

        // Agregar nuevo voluntario con la fecha de creación
        volunteers.push({
            ...data,
            createdAt: new Date().toISOString()
        })

        // Escribir los datos de nuevo en el archivo
        await fs.writeFile(filePath, JSON.stringify(volunteers, null, 2))

        return { success: true }
    } catch (error: any) {
        console.error('Error al guardar el voluntario:', error)
        return { error: error.message || 'Error saving to file' }
    }
}