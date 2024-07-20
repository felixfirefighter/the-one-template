// NotificationSettings.js
import React from 'react'

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
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left"> </th>
            <th className="text-center">Push</th>
            <th className="text-center">Email</th>
            <th className="text-center">SMS</th>
          </tr>
        </thead>
        <tbody>
          {settings.map((setting) => (
            <tr key={setting.id} className="border-t">
              <td className="py-4">{setting.title}</td>
              {['push', 'email', 'sms'].map((type) => (
                <td key={type} className="text-center">
                  
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 cursor-not-allowed">
          Save changes
        </button>
      </div>
    </div>
  )
}
