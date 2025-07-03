import { Button, PasswordInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { FC } from 'react'
import { SignUpFormData } from '../model/model'
import styles from './SignUp.module.scss'

interface Props {
  onSubmit: (formData: SignUpFormData) => void
}

const SignUp: FC<Props> = ({ onSubmit }) => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Некорректный email'),
      password: value =>
        value.length >= 6 ? null : 'Пароль должен содержать минимум 6 символов',
    },
  })

  const handleSubmit = (values: typeof form.values) => {
    onSubmit({
      email: values.email,
      password: values.password,
    })
  }

  return (
    <form className={styles.form} onSubmit={form.onSubmit(handleSubmit)}>
      <h1 className={styles.title}>Регистрация</h1>
      <TextInput
        label='Почта'
        placeholder='your@email.com'
        required
        classNames={{
          input: styles.input,
          label: styles.label,
        }}
        {...form.getInputProps('email')}
      />
      <PasswordInput
        label='Пароль'
        placeholder='Ваш пароль'
        required
        classNames={{
          innerInput: styles.input,
          label: styles.label,
        }}
        {...form.getInputProps('password')}
      />
      <Button type='submit' fullWidth className={styles.submitButton}>
        Зарегистрироваться
      </Button>
    </form>
  )
}

export default SignUp
