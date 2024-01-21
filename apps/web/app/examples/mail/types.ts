export interface InboxMail {
  name: string
  title: string
  content: string
  date: Date
  labels: Array<{
    label: string
  }>
}
