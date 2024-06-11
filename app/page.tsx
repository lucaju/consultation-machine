import { Story } from '@/components/story';
import { Topbar } from '@/components/topbar';
import { Container, Flex } from '@radix-ui/themes';

export default async function Home() {
  return (
    <Container size="2">
      <Flex direction="column" gap="7" align="center">
        <Topbar />
        <Story />
      </Flex>
    </Container>
  );
}
