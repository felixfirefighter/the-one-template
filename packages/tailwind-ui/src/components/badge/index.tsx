import clsx from "clsx"
import tinycolor from "tinycolor2";
import { COLOR_MAP, Color } from "../../types/color"

export interface BadgeProps {
  title: string
  color: Color | string
  size?: 'sm' | 'md' | 'lg'
}

export const Badge: React.FC<BadgeProps> = ({ title, color, size = 'md' }) => {
  const SIZE_MAP = {
    sm: 'text-xs px-1.5 py-0.5',
    md: 'text-sm px-2 py-0.5',
    lg: 'text-base px-2.5 py-1'
  }

  const style = {
    borderColor: color in COLOR_MAP ? undefined : tinycolor(color).lighten(35).toString(),
    backgroundColor: color in COLOR_MAP ? undefined : tinycolor(color).lighten(40).toString(),
    color: color in COLOR_MAP ? undefined : color
  }

  return (
    <span className={clsx(`border rounded-full ${[SIZE_MAP[size]]}`, {
      [COLOR_MAP[color] as string]: color in COLOR_MAP,
    })} style={style}>
      {title}
    </span>
  )
}
