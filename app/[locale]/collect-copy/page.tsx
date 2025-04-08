import { Topbar } from '@/components/topbar';
import { AddContribution } from '@/components/add-contribution';
import { Container, Flex, Heading } from '@radix-ui/themes';

export default function CollectPage() {
  return (
    <Container size="2">
      <Flex direction="column" gap="7" align="center">
        <Topbar />
        <Heading size="5">GAr-bagge OUT</Heading>
        <AddContribution />
      </Flex>
    </Container>
  );
}
