import { contributionOpenedAtom } from '@/jotai/store';
import { fetchOllama, updateContributionToDb } from '@/server-actions';
import type { ContributionData } from '@/types';
import { stripHTMLTags } from '@/utils';
import { Box, Flex } from '@radix-ui/themes';
import { useAtom } from 'jotai';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Button } from '../button';

export const Summary = () => {
  const t = useTranslations();

  const [contributionOpened, setContributionOpened] = useAtom(contributionOpenedAtom);

  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);

    const sanitizedText = stripHTMLTags(contributionOpened?.content);

    const summarizePrompt = t('prompt.Summarize the following text in one paragraph');
    const sentimentPrompt = t('prompt.Classify the sentiment of the following text');
    const singleWordPrompt = t('prompt.It should be a single word');

    const summmarizeResponse = await fetchOllama(`${summarizePrompt}: ${sanitizedText}`);
    const sentimentResponse = await fetchOllama(
      `${sentimentPrompt}: ${sanitizedText}. ${singleWordPrompt}.`,
    );

    await save({ summary: summmarizeResponse.content, sentiment: sentimentResponse.content });

    setIsLoading(false);
  };

  const save = async ({
    summary,
    sentiment,
  }: Required<Pick<ContributionData, 'summary' | 'sentiment'>>) => {
    await updateContributionToDb(contributionOpened!.id, { summary, sentiment });
    setContributionOpened({ ...contributionOpened!, summary, sentiment });
  };

  return (
    <Flex direction="column" gap="2">
      <Button
        loading={isLoading}
        onPointerDown={handleGenerate}
        style={{ alignSelf: 'center', cursor: 'pointer' }}
      >
        {contributionOpened?.summary ? t('project.Regenerate') : t('project.Generate')}
      </Button>
      <Flex direction="column" gap="2">
        {contributionOpened?.sentiment && (
          <Box
            p="2"
            style={{
              backgroundColor: 'var(--gray-3)',
              borderRadius: 'var(--radius-3)',
              boxShadow: 'var(--shadow-4)',
            }}
          >
            {contributionOpened.sentiment}
          </Box>
        )}
        <Box p="2">{contributionOpened?.summary}</Box>
      </Flex>
    </Flex>
  );
};
