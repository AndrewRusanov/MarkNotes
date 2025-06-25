import { Component, ErrorInfo, ReactNode, Suspense } from 'react'

interface State {
  hasError: boolean
}

interface Props {
  children: ReactNode
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Suspense>
          {/* TODO: сделать страницу ошибки */}
          <div>Ошибка</div>
          {/*<ErrorPage />*/}
        </Suspense>
      )
    }

    return (
      //TODO: добавить Loader
      <Suspense fallback={<div>Загрузка...</div>}>
        {this.props.children}
      </Suspense>
    )
  }
}

export default ErrorBoundary
