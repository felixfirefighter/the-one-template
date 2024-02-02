import { Container } from "@mantine/core";
import { PlaygroundHeader } from "../../../components/examples/playground/playground-header";
import { PlaygroundMain } from "../../../components/examples/playground/playground-main";

export default function Page(): JSX.Element {
    return (
      <Container size='xl' p={0}>
        <PlaygroundHeader />

        <PlaygroundMain />
      </Container>
    )
  }
  