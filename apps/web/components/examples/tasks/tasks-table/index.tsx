'use client'

import { Box } from '@mantine/core'
import { DataTable } from 'mantine-datatable'

export const TasksTable = () => {
  return (
    <Box>
      <DataTable
        withTableBorder
        borderRadius="sm"
        withColumnBorders
        striped
        highlightOnHover
        // provide data
        records={[
          { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
          // more records...
        ]}
        // define columns
        columns={[
          {
            accessor: 'id',
            // this column has a custom title
            title: '#',
            // right-align column
            textAlign: 'right',
          },
          { accessor: 'name' },
          {
            accessor: 'party',
            // this column has custom cell data rendering
            render: ({ party }) => (
              <Box fw={700} c={party === 'Democratic' ? 'blue' : 'red'}>
                {party.slice(0, 3).toUpperCase()}
              </Box>
            ),
          },
          { accessor: 'bornIn' },
        ]}
      />
    </Box>
  )
}
