import clsx from 'clsx'

export interface Props {
  type?: 'primary'
  block?: boolean
  children?: React.ReactNode
  onClick?: () => void
}

const TYPE_MAP = {
  primary: 'bg-indigo-700 text-white',
}

export const Button: React.FC<Props> = ({
  type = 'primary',
  children,
  block = true,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx('rounded py-2.5 px-6 font-medium', TYPE_MAP[type], {
        'w-full': block,
      })}
    >
      {children}
    </button>
  )
}
