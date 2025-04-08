'use client';

import { Button, Flex } from '@radix-ui/themes';
import { useAtomValue } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { addContributionOpenAtom, textExtractedAtom } from './store';

export const Done = () => {
  const resetDialog = useResetAtom(addContributionOpenAtom);
  const textExtracted = useAtomValue(textExtractedAtom);

  // const summary = useAtomValue(summaryAtom);
  // const sentiment = useAtomValue(sentimentAtom);

  const save = async () => {
    //TODO SAVE
    resetDialog();
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
        <Button onClick={() => save} size="3" style={{ cursor: 'pointer' }}>
          Save
        </Button>
      </Flex>
    </Flex>
  );
};
