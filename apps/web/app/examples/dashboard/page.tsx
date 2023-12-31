import { SegmentedControl } from "@mantine/core";
import { AppText } from "@the-one/ui";

export const metadata = {
    title: 'Dashboard - The One'
}

export default function Page(): JSX.Element {
  return (
    <main>
      <AppText size='5xl'>Dashboard</AppText>
      <SegmentedControl data={['Overview', 'Angular', 'Vue']} />
    </main>
  )
}
