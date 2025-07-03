export interface SignInFormData {
  email: string
  password: string
}

export type Errors = Record<keyof SignInFormData, string>

export const INITIAL_ERRORS: Errors = {
  email: '',
  password: '',
}
