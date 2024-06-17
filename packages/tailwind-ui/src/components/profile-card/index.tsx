import { Button } from '../button'
import { SocialIcon, SocialIconProps } from '../social'

interface Props {
  avatar: string
  name: string
  role: string
  company: string
  headline: string
  cta: {
    text: string
    onClick: () => void
  }
  socials: SocialIconProps[]
}

export const ProfileCard: React.FC<Props> = ({
  name,
  role,
  company,
  avatar,
  headline,
  cta,
  socials,
}) => {
  return (
    <div
      className="py-6 px-4 rounded-lg shadow bg-white text-center"
      style={{
        width: 340,
      }}
    >
      <img className="rounded-full w-16 mx-auto mb-6" src={avatar} alt={name} />
      <div className="font-medium text-xl">{name}</div>
      <div className="text-neutral-600 text-sm mb-6">
        {role} @ {company}
      </div>
      <p className="text-neutral-600 mb-10">{headline}</p>

      <Button block onClick={cta.onClick}>
        {cta.text}
      </Button>

      <div className="pt-6 text-center">
        {socials.map((social) => (
          <SocialIcon
            type={social.type}
            url={social.url}
            className="text-indigo-700 px-2"
          />
        ))}
      </div>
    </div>
  )
}
