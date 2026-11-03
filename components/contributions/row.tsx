import { Table as TableRadix } from '@radix-ui/themes';
import { format } from 'date-fns';
import { useAtomValue, useSetAtom } from 'jotai';
// import { stripHTMLTags } from '@/utils';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { MdOutlineNewReleases } from 'react-icons/md';
import { useRouter } from '@/app/navigation';
import { contributionOpenedAtom, newContributionIdAtom } from '@/jotai/store';
import type { ContributionData } from '@/types';
import { Button } from '../button';

export const Row = ({ contribution }: { contribution: ContributionData }) => {
  const {
    id,
    date,
    // content,
    sentiment,
  } = contribution;
  const router = useRouter();
  const t = useTranslations();

  // const sanitizedText = stripHTMLTags(content);

  const setContributionOpened = useSetAtom(contributionOpenedAtom);
  const newContributionId = useAtomValue(newContributionIdAtom);

  const [hover, setHover] = useState(false);

  const handleClickView = () => {
    setContributionOpened(contribution);
    router.replace(`/contributions?id=${contribution.id}`);
  };

  return (
    <TableRadix.Row
      key={id}
      onPointerOver={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      style={{
        backgroundColor: hover
          ? 'var(--accent-3)'
          : newContributionId === id
            ? 'var(--accent-4)'
            : 'var(--accent-1)',
      }}
    >
      <TableRadix.RowHeaderCell>
        {newContributionId === id && <MdOutlineNewReleases size={20} />}
      </TableRadix.RowHeaderCell>
      <TableRadix.RowHeaderCell>{id}</TableRadix.RowHeaderCell>
      <TableRadix.Cell>{format(new Date(date), 'dd/MM/yyyy')}</TableRadix.Cell>
      {/* <TableRadix.Cell
        maxWidth={'400px'}
        style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
      >
        {sanitizedText}
      </TableRadix.Cell> */}

      <TableRadix.Cell
        maxWidth={'600px'}
        style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
      >
        {sentiment ?? ''}
      </TableRadix.Cell>

      <TableRadix.Cell
        style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
      >
        <Button onPointerDown={handleClickView}>{t('project.View')}</Button>
      </TableRadix.Cell>
    </TableRadix.Row>
  );
};
