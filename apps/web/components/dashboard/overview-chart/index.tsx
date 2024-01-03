import { Bar, BarChart, ResponsiveContainer } from 'recharts'
import { DATA } from './types'

export const OverviewChart = () => {
  return (
    <div style={{ width: '100%' }}>
      <ResponsiveContainer width="500px" height="500px">
        <BarChart width={200} height={400} data={DATA}>
          <Bar dataKey="pv" fill="#000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
