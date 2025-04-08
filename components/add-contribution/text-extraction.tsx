'use client';

import { Button, Flex } from '@radix-ui/themes';
import { useAtomValue, useSetAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import Image from 'next/image';
import { useState } from 'react';
import { createWorker } from 'tesseract.js';
import {
  addContributionOpenAtom,
  imageCapturedAtom,
  processStepAtom,
  textExtractedAtom,
} from './store';

export const TextExtraction = () => {
  const resetDialog = useResetAtom(addContributionOpenAtom);
  const setProcessStep = useSetAtom(processStepAtom);
  const imageCaptured = useAtomValue(imageCapturedAtom);
  const setTextExtracted = useSetAtom(textExtractedAtom);

  const [isProcessing, setIsProcessing] = useState(false);

  const processCapturedImage = async () => {
    if (!imageCaptured) return;

    setIsProcessing(true);
    const worker = await createWorker('eng');

    const ret = await worker.recognize(imageCaptured);

    console.log(ret);

    setTextExtracted(ret.data.text);
    await worker.terminate();

    setIsProcessing(false);
    setProcessStep('summary');
  };

  const handleCancel = () => {
    resetDialog();
  };

  return (
    <Flex direction="column" gap="2">
      {imageCaptured && (
        <Image
          src={imageCaptured}
          alt="logo"
          width={640}
          height={480}
          style={{ borderRadius: 8, transform: 'scaleX(1)' }}
        />
      )}
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
        <Button
          loading={isProcessing}
          onClick={processCapturedImage}
          size="3"
          style={{ cursor: 'pointer' }}
        >
          Process image
        </Button>
      </Flex>
    </Flex>
  );
};
