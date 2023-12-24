'use client'

import { Badge, Button, Card, Group, Image, Text } from '@the-one/mantine'
import { AppButton } from '@the-one/mantine-custom'
import styles from './page.module.css'

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <AppButton></AppButton>
        <Card.Section>
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Norway Fjord Adventures</Text>
          <Badge color="pink">On Sale</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>
    </main>
  )
}
