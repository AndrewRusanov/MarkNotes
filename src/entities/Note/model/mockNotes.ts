import dayjs from 'dayjs'
import { v6 as uuid } from 'uuid'
import { NoteModel } from './types'

export const MOCK_NOTES: NoteModel[] = [
  {
    id: uuid(),
    title: 'Новая заметка',
    createAt: dayjs(),
    note: 'Семья текст',
    group: 'Семья',
  },
  {
    id: uuid(),
    title: 'Новая заметка 1',
    createAt: dayjs(),
    note: 'Работа текст',
    group: 'Работа',
  },
  {
    id: uuid(),
    title: 'Новая заметка 22222222222222222222',
    createAt: dayjs(),
    note: 'Работа текст',
    group: 'Работа',
  },
  {
    id: uuid(),
    title: 'Новая заметка 2',
    createAt: dayjs(),
    note: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum non nibh vitae hendrerit. Etiam varius lacinia lorem blandit ultricies. In suscipit lectus in augue volutpat posuere. Vestibulum eu rutrum ante. Morbi rutrum est pulvinar felis pulvinar, sed rutrum leo pellentesque. Suspendisse tempus mauris vel erat sodales, in vestibulum nulla eleifend. Morbi ornare libero non tristique maximus. Vivamus aliquet nisl sed eros interdum, nec feugiat ligula porttitor. Nulla lacinia ac mauris ut varius.

Donec eu auctor arcu, in rutrum metus. Morbi finibus ex id nibh dapibus vestibulum. Vestibulum viverra massa tincidunt erat porttitor, sit amet tempor lectus ultricies. Donec ut purus a felis ultricies rhoncus. Praesent cursus mattis dictum. Nullam cursus tempor leo, eu aliquet dui pulvinar non. Integer gravida odio diam, sed consequat lacus commodo vitae. Praesent quis molestie lectus. Fusce tortor erat, imperdiet vel luctus sed, placerat sed nisi. Donec posuere enim ligula, vitae ornare lacus gravida aliquet. Sed at lobortis massa. Aenean molestie tortor sit amet facilisis maximus. Curabitur scelerisque in metus eget aliquet. In dignissim dictum eros.

Vestibulum aliquam velit velit. Nam ut laoreet diam. Donec ac posuere nibh, et ultrices sem. Integer tempus eget lectus in facilisis. Nam enim nibh, eleifend et lectus ut, placerat molestie augue. In mi neque, commodo sed felis in, mattis dictum velit. Nam non ex nec erat auctor feugiat. Morbi tempor in quam vel tincidunt. Proin dignissim quam id massa pellentesque pharetra. Nunc vehicula iaculis urna, eget suscipit tellus condimentum vel. Cras urna arcu, consectetur sed varius eget, maximus at sem. Sed quis turpis blandit lacus ultrices dictum. Aenean et tempus ligula.

Nunc in ex tincidunt, blandit augue in, varius urna. Sed eget hendrerit urna. Vestibulum nec quam in neque volutpat consequat. Nam rhoncus urna non nisi blandit bibendum. Nullam sollicitudin sagittis erat, ut dignissim metus. Curabitur velit nunc, accumsan non ante porta, maximus egestas erat. Aenean elementum aliquam lectus nec tristique. Morbi ultrices nisi quis magna sollicitudin venenatis.

Sed ligula mauris, eleifend nec eleifend quis, aliquam sit amet turpis. Nulla facilisi. Vestibulum commodo eros vel erat porta, ac pharetra urna fringilla. Mauris semper neque at metus tristique, non pulvinar nunc eleifend. Phasellus auctor purus lectus. Nulla in pharetra enim. In rutrum nibh ac nisl elementum sagittis vel vel tellus. Sed dui dui, iaculis hendrerit dictum sed, gravida quis dui.`,
    group: 'Какая-то',
  },
]
