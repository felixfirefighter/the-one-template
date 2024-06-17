import { RiArrowRightLine } from '@remixicon/react'
import { Link } from '../../types/link'
import { Tag, TagProps } from '../tag'

interface Props {
  image: string
  tag: TagProps
  title: string
  description: string
  link: Link
}

export const BlogCard: React.FC<Props> = ({
  image,
  tag,
  title,
  description,
  link,
}) => {
  return (
    <div className="rounded-md shadow bg-white w-85">
      <img className="rounded-t-md" src={image} alt={title} />

      <div className="px-4 py-6">
        <Tag {...tag} />

        <div className="font-semibold text-lg truncate pt-2 pb-3">{title}</div>
        <div className={'text-neutral-600 mb-6 line-clamp-2'}>
          {description}
        </div>

        <a
          className="flex items-center text-indigo-700 hover:text-indigo-900 focus:text-indigo-900 cursor-pointer"
          href={link.url}
        >
          <div className="mr-1.5">{link.text}</div>
          <RiArrowRightLine size={20} />
        </a>
      </div>
    </div>
  )
}
