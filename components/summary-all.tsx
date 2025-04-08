import { sentimentAllAtom, summaryAllAtom } from '@/jotai/store';
import { fetchOllama, getDb, updateContributionToDb } from '@/server-actions';
import { stripHTMLTags } from '@/utils';
import { Box, Flex, Heading } from '@radix-ui/themes';
import { useAtom } from 'jotai';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Markdown from 'react-markdown';
import { Button } from './button';

export const SummaryAll = () => {
  const t = useTranslations();

  const [summaryAll, setSummaryAll] = useAtom(summaryAllAtom);
  const [sentimentAll, setSentimentAll] = useAtom(sentimentAllAtom);

  const [isLoading, setIsLoading] = useState(false);
  const [loadingString, setLoadingString] = useState('');

  const handleGenerate = async () => {
    setIsLoading(true);

    const contributions = await getDb();
    let summaries = '';

    for (let index = 0; index < contributions.length; index++) {
      const contribution = contributions[index];
      setLoadingString(
        `Processing contribution ${contribution.id}... (${index + 1}/${contributions.length})`,
      );

      if (!contribution.summary) {
        const sanitizedText = stripHTMLTags(contribution.content);

        const summarizePrompt = `Summarize the following text in one paragraph: ${sanitizedText}`;
        const summmarizeResponse = await fetchOllama(summarizePrompt);

        const sentimentPrompt = `Classify the sentiment of the following text: ${sanitizedText}. It should be a single word.`;
        const sentimentResponse = await fetchOllama(sentimentPrompt);

        contributions.with(index, {
          ...contribution,
          summary: summmarizeResponse.content,
          sentiment: sentimentResponse.content,
        });

        await updateContributionToDb(contribution.id, {
          summary: summmarizeResponse.content,
          sentiment: sentimentResponse.content,
        });
      }

      summaries += contribution.summary + '\n';
    }

    setLoadingString('');

    const summarizePrompt = t('prompt.Summarize the following text in one paragraph');
    const sentimentPrompt = t('prompt.Classify the sentiment of the following text');
    const singleWordPrompt = t('prompt.It should be a single word');

    const summmarizeResponse = await fetchOllama(`${summarizePrompt}: ${summaries}`);
    const sentimentResponse = await fetchOllama(
      `${sentimentPrompt}: ${summaries}. ${singleWordPrompt}.`,
    );

    setSummaryAll(summmarizeResponse.content);
    setSentimentAll(sentimentResponse.content);

    setIsLoading(false);
  };

  return (
    <Flex direction="column" gap="2">
      <Heading size="4" align={'center'}>
        {t('project.Summary')}
      </Heading>
      <Button
        loading={isLoading}
        onPointerDown={handleGenerate}
        style={{ alignSelf: 'center', cursor: 'pointer' }}
      >
        {summaryAll ? t('project.Regenerate') : t('project.Generate')}
      </Button>
      {isLoading && <Box p="2">{loadingString}</Box>}
      {sentimentAll && <Box p="2">{sentimentAll}</Box>}
      {summaryAll && (
        <Box p="2">
          <Markdown>{summaryAll}</Markdown>
        </Box>
      )}
    </Flex>
  );
};
