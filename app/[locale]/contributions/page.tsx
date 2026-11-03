import fs from 'node:fs';
import { Container, Flex } from '@radix-ui/themes';
import { getLocale } from 'next-intl/server';
import { redirect } from '@/app/navigation';
import { Contributions } from '@/components/contributions';
import { Topbar } from '@/components/topbar';
import type { ContributionData } from '@/types';

export default async function ContributionsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const locale = await getLocale();
  const resolvedSearchParams = await searchParams;
  const contributionId = Array.isArray(resolvedSearchParams.id)
    ? resolvedSearchParams.id[0]
    : resolvedSearchParams.id;

  const data = fs.readFileSync('./db/contributions/data.json', 'utf8');
  const jsonData = JSON.parse(data).reverse() as ContributionData[];

  const contribution = contributionId
    ? jsonData.find((item) => item.id === contributionId)
    : undefined;

  if (contributionId && !contribution) {
    redirect({ href: '/contributions', locale });
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
