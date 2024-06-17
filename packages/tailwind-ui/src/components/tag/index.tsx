import { COLOR_MAP, Color } from "../../types/color"

export interface TagProps {
  title: string
  color: Color
}

export const Tag: React.FC<TagProps> = ({ title, color }) => {
  return (
    <span className={`${COLOR_MAP[color]} border px-2 py-1 rounded-full text-sm`}>
      {title} {}
    </span>
  )
}
