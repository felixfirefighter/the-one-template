import {
  RiFacebookBoxLine,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiMailLine,
  RiPhoneLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from '@remixicon/react'
import clsx from 'clsx'

interface Social {
  type:
    | 'facebook'
    | 'instagram'
    | 'linkedin'
    | 'twitter'
    | 'email'
    | 'phone'
    | 'youtube'
    | 'github'
  url: string
}

interface QuickLink {
  label: string
  url: string
  disabled?: boolean
}

interface Props {
  quickLinks: QuickLink[]
  socials: Social[]
  copyright: string
}

const SOCIAL_MAPPER = {
  youtube: RiYoutubeLine,
  github: RiGithubLine,
  facebook: RiFacebookBoxLine,
  instagram: RiInstagramLine,
  linkedin: RiLinkedinBoxLine,
  twitter: RiTwitterXLine,
  email: RiMailLine,
  phone: RiPhoneLine,
}

export const Footer: React.FC<Props> = ({ quickLinks, socials, copyright }) => {
  return (
    <footer className="text-gray-600 py-8">
      <div className="container mx-auto flex flex-col items-center">
        <nav className="mb-8 flex space-x-6">
          {quickLinks.map((link) => (
            <a
              href={link.url}
              target='_blank'
              className={clsx('hover:text-neutral-900', {
                'text-neutral-600': !link.disabled,
                'text-neutral-400 pointer-events-none cursor-default':
                  link.disabled,
              })}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mb-4 flex space-x-4">
          {socials.map((social) => {
            const Icon = SOCIAL_MAPPER[social.type]
            return (
              <a href={social.url} target='_blank'>
                <Icon
                  className={'text-neutral-400 hover:text-neutral-600'}
                />
              </a>
            )
          })}
        </div>
        <div className="text-sm text-neutral-900">&copy; {copyright}</div>
      </div>
    </footer>
  )
}

export default Footer
