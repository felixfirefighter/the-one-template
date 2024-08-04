import React from 'react'

interface TeamMember {
  name: string
  title: string
  description: string
  image: string
}

interface Props {
  headline: string
  title: string
  description: string
  items: TeamMember[]
}

export const TeamSection: React.FC<Props> = ({
  headline,
  title,
  description,
  items,
}) => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-brand-700 font-semibold mb-3">{headline}</h2>
        <h1 className="text-3xl font-semibold text-neutral-900 mb-5">
          {title}
        </h1>
        <p className="text-xl text-neutral-600">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((member) => (
          <div key={member.name}>
            <img className="w-full aspect-square mb-6" src={member.image} alt={member.name} />
            <div>
              <h3 className="text-xl font-semibold text-neutral-900">
                {member.name}
              </h3>
              <p className="text-brand-700 text-lg font-semibold mb-4">{member.title}</p>
              <p className="text-neutral-600">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
