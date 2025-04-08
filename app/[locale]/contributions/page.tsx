import { redirect } from '@/app/navigation';
import { Contributions } from '@/components/contributions';
import { Topbar } from '@/components/topbar';
import { ContributionData } from '@/types';
import { Container, Flex } from '@radix-ui/themes';
import fs from 'fs';

export default function ContributionsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const contributionId = Array.isArray(searchParams.id) ? searchParams.id[0] : searchParams.id;

  const data = fs.readFileSync('./db/contributions/data.json', 'utf8');
  const jsonData = JSON.parse(data).reverse() as ContributionData[];

  const contribution = contributionId
    ? jsonData.find((contribution) => contribution.id === contributionId)
    : undefined;

  if (contributionId && !contribution) {
    redirect('/contributions');
  }

  return (
    <Container size="2">
      <Flex direction="column" gap="7" align="center">
        <Topbar />
        <Contributions selected={contribution} data={jsonData} />
      </Flex>
    </Container>
  );
}
