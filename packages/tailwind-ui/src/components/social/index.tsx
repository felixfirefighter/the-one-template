import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
} from '@remixicon/react'
import clsx from 'clsx'

export interface SocialIconProps {
  type: 'github' | 'twitter' | 'linkedin' | 'facebook' | 'instagram'
  size?: number
  url: string
}

interface Props extends SocialIconProps {
  className?: string
}

export const SocialIcon: React.FC<Props> = ({
  type,
  size = 20,
  url,
  className,
}) => {
  const cn = clsx('cursor-pointer inline-block m-2', className)

  switch (type) {
    case 'github':
      return (
        <a href={url} target="_blank" rel="noreferrer" className={cn}>
          <RiGithubFill size={size} />
        </a>
      )
    case 'twitter':
      return (
        <a href={url} target="_blank" rel="noreferrer" className={cn}>
          <RiTwitterXFill size={size} />
        </a>
      )
    case 'linkedin':
      return (
        <a href={url} target="_blank" rel="noreferrer" className={cn}>
          <RiLinkedinFill size={size} />
        </a>
      )
    case 'facebook':
      return (
        <a href={url} target="_blank" rel="noreferrer" className={cn}>
          <RiFacebookBoxFill size={size} />
        </a>
      )
    case 'instagram':
      return (
        <a href={url} target="_blank" rel="noreferrer" className={cn}>
          <RiInstagramFill size={size} />
        </a>
      )
  }
}
