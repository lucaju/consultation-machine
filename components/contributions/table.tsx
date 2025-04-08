import { ContributionData } from '@/types';
import { Table as TableRadix } from '@radix-ui/themes';
import { Row } from './row';
import { useTranslations } from 'next-intl';

export const Table = ({ data }: { data: ContributionData[] }) => {
  const t = useTranslations();
  return (
    <TableRadix.Root style={{ maxHeight: 600, overflow: 'auto' }}>
      <TableRadix.Header>
        <TableRadix.Row>
          <TableRadix.ColumnHeaderCell></TableRadix.ColumnHeaderCell>
          <TableRadix.ColumnHeaderCell>ID</TableRadix.ColumnHeaderCell>
          <TableRadix.ColumnHeaderCell>{t('project.Date')}</TableRadix.ColumnHeaderCell>
          {/* <TableRadix.ColumnHeaderCell>{t('project.Content')}</TableRadix.ColumnHeaderCell> */}
          <TableRadix.ColumnHeaderCell>{t('project.Sentiment')}</TableRadix.ColumnHeaderCell>
          <TableRadix.ColumnHeaderCell></TableRadix.ColumnHeaderCell>
        </TableRadix.Row>
      </TableRadix.Header>

      <TableRadix.Body>
        {data.map((contribution) => (
          <Row key={contribution.id} contribution={contribution} />
        ))}
      </TableRadix.Body>
    </TableRadix.Root>
  );
};
