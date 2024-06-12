import { LLM } from '@/components/llm';
import { Madlib } from '@/components/madlib';
import { Topbar } from '@/components/topbar';
import { Container, Flex } from '@radix-ui/themes';

export default async function Home() {
  return (
    <Container size="2">
      <Flex direction="column" gap="7" align="center">
        <Topbar />
        <Madlib />
        <LLM />
      </Flex>
    </Container>
  );
}
