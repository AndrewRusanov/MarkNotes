export interface SignUpFormData {
  email: string
  password: string
}

export type Errors = Record<keyof SignUpFormData, string>

export const INITIAL_ERRORS: Errors = {
  email: '',
  password: '',
}
