'use client'

import { Avatar, Paper } from '@mantine/core'
import { MAppRichListItem, MAppText } from '@the-one/mantine-ui'
import { RECENT_SALES } from './data'

export const OverviewRecentSales = () => {
  return (
    <Paper radius={'lg'} shadow="sm" p={24} withBorder>
      <MAppText fontWeight="500" size='lg' mb={'sm'}>Recent Sales</MAppText>
      {RECENT_SALES.map((sale) => {
        return (
          <MAppRichListItem
            prefix={<Avatar src={sale.img} mr='sm'></Avatar>}
            key={sale.username}
            title={sale.username}
            subtitle={sale.email}
            suffix={
              <MAppText size='sm'>{sale.amount}</MAppText>
            }
          />
        )
      })}
    </Paper>
  )
}
