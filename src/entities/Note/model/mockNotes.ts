import dayjs from 'dayjs'
import { v6 as uuid } from 'uuid'
import { NoteModel } from './types'

export const EMPTY_NOTE: NoteModel = {
  id: uuid(),
  title: 'Новая заметка',
  createAt: dayjs(),
  note: '',
  group: 'Личное',
}
