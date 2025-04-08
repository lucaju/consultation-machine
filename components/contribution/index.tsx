import { contributionOpenedAtom } from '@/jotai/store';
import { Dialog, Flex, SegmentedControl, Text, VisuallyHidden } from '@radix-ui/themes';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { Button } from '../button';
import { Letter } from './letter';
import { PolicyDraft } from './policy-draft';
import { Summary } from './summary';
import { useRouter } from '@/app/navigation';
import { format } from 'date-fns';
import { useTranslations } from 'next-intl';

export const Contribution = () => {
  const router = useRouter();
  const t = useTranslations();

  const [contributionOpened, setContributionOpened] = useAtom(contributionOpenedAtom);

  const [view, setView] = useState('letter');

  const handleOpenChange = (value: boolean) => {
    if (value) return;

    setContributionOpened(null);
    router.replace('/contributions');
  };

  return (
    <Dialog.Root open={true} onOpenChange={handleOpenChange}>
      <Dialog.Content minWidth="1000px">
        <Dialog.Title style={{ textAlign: 'center' }}>
          {t('project.Contribution')} #{contributionOpened!.id}
          <br />
          <Text size="1">{format(new Date(contributionOpened!.date), 'dd/MM/yyyy HH:mm')}</Text>
        </Dialog.Title>
        <VisuallyHidden asChild>
          <Dialog.Description>{t('project.Contribution details')}</Dialog.Description>
        </VisuallyHidden>
        <Flex direction="column" gap="3" width={'100%'} minHeight={'600px'}>
          <SegmentedControl.Root defaultValue="letter" value={view}>
            <SegmentedControl.Item
              onPointerDown={() => setView('letter')}
              style={{ cursor: 'pointer' }}
              value="letter"
            >
              {t('project.Letter')}
            </SegmentedControl.Item>
            <SegmentedControl.Item
              onPointerDown={() => setView('summary')}
              style={{ cursor: 'pointer' }}
              value="summary"
            >
              {t('project.Summary')}
            </SegmentedControl.Item>
            <SegmentedControl.Item
              onPointerDown={() => setView('policy')}
              style={{ cursor: 'pointer' }}
              value="policy"
            >
              {t('project.Policy Draft')}
            </SegmentedControl.Item>
          </SegmentedControl.Root>
          {view === 'policy' ? <PolicyDraft /> : view === 'summary' ? <Summary /> : <Letter />}
        </Flex>
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button>{t('project.Close')}</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
