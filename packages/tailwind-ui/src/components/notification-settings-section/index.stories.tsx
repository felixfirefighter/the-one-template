import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  NotificationSettingProps,
  NotificationSettingType,
  NotificationSettingsSection,
} from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof NotificationSettingsSection> = {
  title: 'Components/Notification Settings Section',
  component: NotificationSettingsSection,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    settings: [],
    title: 'Manage Your Notifications',
    description:
      'Choose how you want to be notified about the latest updates and messages.',
  },
  render: (args) => {
    const [settings, setSettings] = useState<NotificationSettingProps[]>([
      {
        id: 'marketing',
        title: 'Marketing & promotional content',
        push: false,
        email: true,
        sms: false,
      },
    ])

    const onSettingToggled = (id: string, type: NotificationSettingType) => {
      setSettings((prevSettings) => {
        return prevSettings.map((setting) => {
          if (setting.id === id) {
            return { ...setting, [type]: !setting[type] }
          }
          return setting
        })
      })
    }

    return (
      <NotificationSettingsSection
        {...args}
        onSettingToggled={onSettingToggled}
        onSaved={() => {}}
      />
    )
  },
}
