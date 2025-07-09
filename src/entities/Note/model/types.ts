import { Dayjs } from 'dayjs'

type NoteGroups = 'Дом' | 'Работа' | 'Семья' | 'Личное' | 'Путешествия'

export interface NoteModel {
  id: string
  title: string
  createAt: Dayjs
  group: string | NoteGroups
  note: string
}
