'use client'

import { Grid, Space } from '@mantine/core'
import { CreateAccountCard } from '../create-account-card'
import { PaymentMethodCard } from '../payment-method-card'
import { TeamMembersCard } from '../team-members-card'
import { ShareDocumentCard } from '../share-document-card'
import { NotificationCard } from '../notification-card'
import { ReportIssueCard } from '../report-issue-card'
import { ProjectCard } from '../project-card'

export const CardGrid = () => {
  return (
    <Grid gutter={'lg'}>
      <Grid.Col span={{ md: 6, xl: 4 }}>
        <CreateAccountCard />
        <Space h={'lg'} />
        <PaymentMethodCard />
      </Grid.Col>
      <Grid.Col span={{ md: 6, xl: 4 }}>
        <TeamMembersCard />
        <Space h={'lg'} />
        <ShareDocumentCard />
        <Space h={'lg'} />
        <NotificationCard />
      </Grid.Col>
      <Grid.Col span={{ md: 6, xl: 4 }}>
        <ReportIssueCard />
        <Space h={'lg'} />
        <ProjectCard />
      </Grid.Col>
    </Grid>
  )
}
