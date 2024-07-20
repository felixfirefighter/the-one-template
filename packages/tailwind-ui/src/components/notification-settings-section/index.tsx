// NotificationSettings.js
import React from 'react'
import { Switch } from '../switch'
import { Button } from '../button'

export type NotificationSettingType = 'push' | 'email' | 'sms'

export interface NotificationSettingProps {
  id: string
  title: string
  push?: boolean
  email?: boolean
  sms?: boolean
}

interface Props {
  title: string
  description: string
  settings: NotificationSettingProps[]
  onSettingToggled: (id: string, type: NotificationSettingType) => void
  onSaved: () => void
}

export const NotificationSettingsSection: React.FC<Props> = ({
  title,
  description,
  settings,
  onSettingToggled,
  onSaved,
}) => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-xl text-neutral-900 font-semibold mb-2">{title}</h2>
        <p className="text-neutral-500 text-sm">{description}</p>
      </div>
      <table className='w-full border-spacing-10'>
        <thead>
          <tr className="font-semibold">
            <th> </th>
            <th className="text-center">Push</th>
            <th className="text-center">Email</th>
            <th className="text-center">SMS</th>
          </tr>
        </thead>
        <tbody className="border-t align-top">
          {settings.map((setting) => (
            <tr key={setting.id}>
              <td className="py-2 text-sm">{setting.title}</td>
              {['push', 'email', 'sms'].map((type) => {
                const settingType = type as NotificationSettingType
                return (
                    <td key={type} className="py-2">
                      <div className="flex justify-center">
                        <Switch
                          active={setting[settingType]}
                          onToggled={() => onSettingToggled(setting.id, settingType)}
                        />
                      </div>
                    </td>
                  )
                
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-8">
        <Button size='lg' onClick={onSaved}>Save Changes</Button>
      </div>
    </div>
  )
}
