import { Container, Heading, Text } from '@radix-ui/themes';

export default function NotFound() {
  return (
    <main>
      <Container>
        <Heading>Not Found</Heading>
        <Text>Could not find requested resource</Text>
      </Container>
    </main>
  );
}
