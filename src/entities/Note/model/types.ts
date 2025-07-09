type NoteGroups = 'Дом' | 'Работа' | 'Семья' | 'Личное' | 'Путешествия'

export interface NoteModel {
  id: string
  title: string
  createAt: string
  group: string | NoteGroups
  note: string
}
