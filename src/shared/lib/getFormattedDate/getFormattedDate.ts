import dayjs, { Dayjs } from 'dayjs'

export function getFormattedDate(date: Dayjs): string {
  const now = dayjs()
  if (date.diff(now) < 0) {
    return date.toDate().toLocaleTimeString().split(':').slice(0, 2).join(':')
  }
  return date.toDate().toLocaleDateString()
}
