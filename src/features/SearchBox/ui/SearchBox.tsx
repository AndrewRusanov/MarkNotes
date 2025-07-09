import { SearchIcon } from '@/shared'
import { TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { FC } from 'react'
import styles from './SearchBox.module.scss'

interface Props {
  onSearchChange: (query: string) => void
}

const SearchBox: FC<Props> = ({ onSearchChange }) => {
  const form = useForm({
    initialValues: {
      search: '',
    },
  })

  return (
    <div className={styles.container}>
      <TextInput
        placeholder='Поиск...'
        classNames={{
          input: styles.input,
          section: styles.iconSection,
        }}
        leftSection={<SearchIcon />}
        {...form.getInputProps('search')}
        onChange={e => {
          form.getInputProps('search').onChange(e)
          onSearchChange(e.target.value)
        }}
      />
    </div>
  )
}

export default SearchBox
