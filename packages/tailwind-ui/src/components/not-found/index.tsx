import { Button } from '../button'

interface Props {
  title?: string
  headline?: string
  body?: string
  button: {
    text: string
    onClick: () => void
  }
}

const NotFound: React.FC<Props> = ({ title, headline, body, button }) => {
  return (
    <div className="flex items-center min-h-screen p-4 md:p-8 lg:p-24 bg-gradient-to-b bg-neutral-50">
      <div>
        <h1 className="text-brand-700 text-lg font-semibold mb-3">{title}</h1>
        <h2 className="text-4xl lg:text-6xl font-semibold mb-5 md:mb-6">{headline}</h2>
        <p className="text-neutral-600 text-lg mb-8 lg:mb-16">{body}</p>
        <Button className={'w-full md:w-auto'} size='xl' onClick={button.onClick}>{button.text}</Button>
      </div>
    </div>
  )
}

export default NotFound
