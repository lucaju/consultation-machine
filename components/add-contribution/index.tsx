'use client';

import { Button, Dialog, VisuallyHidden } from '@radix-ui/themes';
import { useAtom, useSetAtom } from 'jotai';
import { useTranslations } from 'next-intl';
import { Done } from './done';
import { ImageCapture } from './image-capture';
import { addContributionOpenAtom, processStepAtom, resetAtom } from './store';
import { Summary } from './summary';
import { TextExtraction } from './text-extraction';

export const AddContribution = () => {
  const t = useTranslations();
  const [open, setOpen] = useAtom(addContributionOpenAtom);
  const [process, setProcess] = useAtom(processStepAtom);
  const reset = useSetAtom(resetAtom);

  const handleOpenChange = (shouldOpen: boolean) => {
    if (shouldOpen) {
      setProcess('image-capture');
    } else {
      reset();
    }
    if (shouldOpen !== open) setOpen(shouldOpen);
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger>
        <Button size="4" style={{ cursor: 'pointer' }}>
          {t('project.Add Contribution')}
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="700px">
        <Dialog.Title>Add Contribution</Dialog.Title>
        <VisuallyHidden asChild>
          <Dialog.Description>Use the camera to capture a contribution letter</Dialog.Description>
        </VisuallyHidden>
        {process === 'image-capture' ? (
          <ImageCapture />
        ) : process === 'text-extraction' ? (
          <TextExtraction />
        ) : process === 'summary' ? (
          <Summary />
        ) : process === 'done' ? (
          <Done />
        ) : null}
      </Dialog.Content>
    </Dialog.Root>
  );
};
