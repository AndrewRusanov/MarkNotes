import { NoteModel } from '@/entities/Note/model/types'
import Dexie, { Table } from 'dexie'

export interface NoteRecord extends Omit<NoteModel, 'createAt'> {
  createAt: string
}

class NotesDB extends Dexie {
  notes!: Table<NoteRecord, string>

  constructor() {
    super('notesDatabase')
    this.version(1).stores({
      notes: 'id',
    })
  }
}

export const db = new NotesDB()
