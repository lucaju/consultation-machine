'use client';

import { useRouter } from '@/app/navigation';
import {
  contributionOpenedAtom,
  madlibReadyAtom,
  // letterAtom,
  // newContributionIdAtom,
  summaryAllAtom,
} from '@/jotai/store';
// import { addNewContributionToDb } from '@/server-actions';
import { ContributionData } from '@/types';
import { Flex, Heading, Separator } from '@radix-ui/themes';
import {
  useAtom,
  useAtomValue,
  useSetAtom,
  // useSetAtom
} from 'jotai';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { Button } from '../button';
import { Contribution } from '../contribution';
import { PolicyDraft } from '../policy-draf';
import { SummaryAll } from '../summary-all';
import { Table } from './table';

interface Props {
  data: ContributionData[];
  selected?: ContributionData;
}

export const Contributions = ({ data, selected }: Props) => {
  const router = useRouter();
  const t = useTranslations();

  const [contributionOpened, setContributionOpened] = useAtom(contributionOpenedAtom);
  // const [letter, setLetter] = useAtom(letterAtom);
  // const setNewContributionId = useSetAtom(newContributionIdAtom);
  const summaryAll = useAtomValue(summaryAllAtom);
  const setMadlibReady = useSetAtom(madlibReadyAtom);

  // const handleNewContribution = async () => {
  //   // if (!letter) return;

  //   // const newContribution = await addNewContributionToDb(letter);

  //   // setLetter(null);
  //   // setNewContributionId(newContribution.id);
  // };

  useEffect(() => {
    // handleNewContribution();
    if (selected) {
      setContributionOpened(selected);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAddContribution = () => {
    setMadlibReady(false);
    router.push('/');
  };

  return (
    <Flex direction="column" gap="7" align="center">
      <Button onClick={handleAddContribution} style={{ cursor: 'pointer' }} variant="solid">
        {t('project.Add Contribution')}
      </Button>
      <Separator my="3" size="4" />
      <Heading size="5">{t('project.Contributions')}</Heading>
      <Table data={data} />
      {contributionOpened && <Contribution />}
      <Separator my="3" size="4" />
      <SummaryAll />
      {summaryAll && (
        <>
          <Separator my="3" size="4" />
          <PolicyDraft />
        </>
      )}
    </Flex>
  );
};
