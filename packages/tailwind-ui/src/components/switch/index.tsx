import clsx from 'clsx'

interface Props {
  active?: boolean
  onToggled: (active: boolean) => void
}

export const Switch: React.FC<Props> = ({ active, onToggled }) => {
  return (
    <div
      className={clsx(
        'w-9 h-5 flex items-center rounded-full p-0.5 cursor-pointer',
        {
          'bg-gray-300': !active,
          'bg-brand-700': active,
        },
      )}
      onClick={() => onToggled(!active)}
    >
      <div
        className={clsx('bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300', {
          'translate-x-4': active,
        })}
      />
    </div>
  )
}
