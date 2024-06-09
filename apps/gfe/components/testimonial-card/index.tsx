import clsx from 'clsx'

interface Props {
  name: string
  handle: string
  message: string
  avatar: string
  width?: number
  maxMessageRow?: number
}

export const TestimonialCard: React.FC<Props> = ({
  name,
  handle,
  message,
  avatar,
  width = 340,
  maxMessageRow = 6,
}) => {
  return (
    <div className="p-6 rounded-lg shadow bg-white" style={{
      width
    }}>
      <div className="flex mb-4">
        <img className="rounded-full mr-4" src={avatar} alt={name} />
        <div className="overflow-hidden">
          <div className="font-semibold text-lg truncate">{name}</div>
          <div className="text-neutral-600 text-sm truncate">{handle}</div>
        </div>
      </div>
      <div className={clsx('text-neutral-600', `line-clamp-${maxMessageRow}`)}>
        {message}
      </div>
    </div>
  )
}