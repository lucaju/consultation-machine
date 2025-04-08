import { summaryAllAtom } from '@/jotai/store';
import { fetchOllama } from '@/server-actions';
import { Box, Flex, Heading } from '@radix-ui/themes';
import { useAtomValue } from 'jotai';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Markdown from 'react-markdown';
import { Button } from './button';

export const PolicyDraft = () => {
  const t = useTranslations();

  const summaryAll = useAtomValue(summaryAllAtom);

  const [isLoading, setIsLoading] = useState(false);
  const [policy, setPolicy] = useState('');

  const handleGenerate = async () => {
    setIsLoading(true);

    const policyDraftPrompt = t('prompt.Create a policy draft considering the following text');
    const formatPrompt = t('prompt.It should be in markdown format');

    const policyDraftResponse = await fetchOllama(
      `${policyDraftPrompt}: ${summaryAll}. ${formatPrompt}.`,
    );

    setPolicy(policyDraftResponse.content);
    setIsLoading(false);
  };

  return (
    <Flex direction="column" gap="2" pb="9">
      <Heading size="4" align={'center'}>
        {t('project.Policy Draft')}
      </Heading>
      <Button
        loading={isLoading}
        onPointerDown={handleGenerate}
        style={{ alignSelf: 'center', cursor: 'pointer' }}
      >
        {summaryAll ? t('project.Regenerate') : t('project.Generate')}
      </Button>
      {policy && (
        <Box
          p="5"
          px="9"
          style={{
            backgroundColor: 'var(--gray-a2)',
            borderRadius: 'var(--radius-3)',
            boxShadow: 'var(--shadow-4)',
            width: 950,
          }}
        >
          <Markdown>{policy}</Markdown>
        </Box>
      )}
    </Flex>
  );
};
