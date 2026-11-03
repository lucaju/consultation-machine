'use client';

import { Button, Flex } from '@radix-ui/themes';
import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { addContributionOpenAtom, processStepAtom, textExtractedAtom } from './store';

export const Summary = () => {
  const resetDialog = useResetAtom(addContributionOpenAtom);
  const setProcessStep = useSetAtom(processStepAtom);
  const textExtracted = useAtomValue(textExtractedAtom);

  // const setSummary = useSetAtom(summaryAtom);
  // const setSentiment = useSetAtom(sentimentAtom);

  const summarize = async () => {
    if (!textExtracted) return;
    //TODO: SUMMARIZE
    setProcessStep('done');
  };

  const handleCancel = () => {
    resetDialog();
  };

  return (
    <Flex direction="column" gap="2">
      {textExtracted}
      <Flex justify="between" gap="2">
        <Button
          color="gray"
          onPointerDown={() => handleCancel()}
          size="4"
          style={{ cursor: 'pointer' }}
          variant="soft"
        >
          Cancel
        </Button>
        <Button onClick={() => summarize} size="3" style={{ cursor: 'pointer' }}>
          Summarize
        </Button>
      </Flex>
    </Flex>
  );
};
