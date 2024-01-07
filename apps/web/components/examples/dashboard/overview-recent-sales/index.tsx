import { Paper } from '@mantine/core'
import { AppRichListItem, AppText } from '@the-one/ui'
import { RECENT_SALES } from './data'

export const OverviewRecentSales = () => {
  return (
    <Paper radius={'lg'} shadow="sm" p={24} withBorder>
      <AppText fontWeight="500" size='lg' mb={'sm'}>Recent Sales</AppText>
      {RECENT_SALES.map((sale) => {
        return (
          <AppRichListItem
            key={sale.username}
            avatarSrc={sale.img}
            title={sale.username}
            subtitle={sale.email}
            suffix={
              <AppText size='sm'>{sale.amount}</AppText>
            }
          />
        )
      })}
    </Paper>
  )
}
