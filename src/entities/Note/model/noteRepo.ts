import { db } from '@/shared'
import dayjs from 'dayjs'
import { NoteModel } from './types'

export const noteRepository = {
  async getAll(): Promise<NoteModel[]> {
    const all = await db.notes.toArray()
    return all.map(n => ({
      ...n,
      createAt: dayjs(n.createAt),
    }))
  },

  async getById(id: string): Promise<NoteModel | null> {
    const raw = await db.notes.get(id)
    if (!raw) return null

    return {
      ...raw,
      createAt: dayjs(raw.createAt),
    }
  },

  async save(note: NoteModel): Promise<void> {
    try {
      await db.notes.put({
        ...note,
        createAt: note.createAt.toISOString(),
      })
    } catch (error) {
      console.error('Failed to save note to IndexedDB:', error)
      throw error // Optionally rethrow or handle the error as needed
    }
  },

  async delete(id: string): Promise<void> {
    try {
      await db.notes.delete(id)
    } catch (error) {
      console.error('Failed to delete note from IndexedDB:', error)
      throw error
    }
  },
}
