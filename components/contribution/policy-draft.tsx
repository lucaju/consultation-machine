import { contributionOpenedAtom } from '@/jotai/store';
import { fetchOllama, updateContributionToDb } from '@/server-actions';
import { ContributionData } from '@/types';
import { stripHTMLTags } from '@/utils';
import { Flex } from '@radix-ui/themes';
import { useAtom } from 'jotai';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Markdown from 'react-markdown';
import { Button } from '../button';

export const PolicyDraft = () => {
  const t = useTranslations();

  const [contributionOpened, setContributionOpened] = useAtom(contributionOpenedAtom);

  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);

    const sanitizedText = stripHTMLTags(contributionOpened?.content);

    const policyDraftPrompt = t('prompt.Create a policy draft considering the following text');
    const formatPrompt = t('prompt.It should be in markdown format');

    const policyDraftResponse = await fetchOllama(
      `${policyDraftPrompt}: ${sanitizedText}. ${formatPrompt}.`,
    );

    console.log(policyDraftResponse);

    await save({ policyDraft: policyDraftResponse.content });

    setIsLoading(false);
    console.log(policyDraftResponse);
  };

  const save = async ({ policyDraft }: Required<Pick<ContributionData, 'policyDraft'>>) => {
    await updateContributionToDb(contributionOpened!.id, { policyDraft });
    setContributionOpened({ ...contributionOpened!, policyDraft });
  };

  return (
    <Flex direction="column" gap="2">
      <Button
        loading={isLoading}
        onPointerDown={handleGenerate}
        style={{ alignSelf: 'center', cursor: 'pointer' }}
      >
        {contributionOpened?.policyDraft ? t('project.Regenerate') : t('project.Generate')}
      </Button>
      <Markdown>{contributionOpened?.policyDraft ?? ''}</Markdown>
    </Flex>
  );
};
