'use client';

import { llmResultAtom, madlibAtom } from '@/jotai/store';
import { Box, Button, Flex, Heading, Section, Text, Tooltip } from '@radix-ui/themes';
import { format } from 'date-fns';
import { useAtomValue } from 'jotai';
import { useTranslations } from 'next-intl';
import { useCallback, useRef, useState } from 'react';
import { LiaCheckSolid, LiaEdit } from 'react-icons/lia';
import { PiCopySimple, PiPrinter } from 'react-icons/pi';
import { useReactToPrint } from 'react-to-print';

export const Letter = () => {
  const t = useTranslations();

  const llmResult = useAtomValue(llmResultAtom);
  const madlib = useAtomValue(madlibAtom);

  const componentRef = useRef<HTMLDivElement | null>(null);

  const [editable, setEditable] = useState(false);

  const personNameItem = madlib.find((item) => 'name' in item && item.name === 'person_name');
  const personName = personNameItem?.value ?? 'Anonymous';

  const today = format(new Date(), 'MMM dd, yyyy');

  const parseText = llmResult
    ?.trim()
    .replaceAll(/\[[^\]]*\]/g, '')
    .split('\n');

  const reactToPrintContent = useCallback(() => {
    return componentRef.current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [componentRef.current]);

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: 'AwesomeFileName',
    // onBeforeGetContent: handleOnBeforeGetContent,
    // onBeforePrint: handleBeforePrint,
    // onAfterPrint: handleAfterPrint,
    removeAfterPrint: true,
  });

  const handleCopy = async () => {
    if (!componentRef.current) return;

    const html = componentRef.current.outerHTML;
    if (!html) return;

    const htmlBlob = new Blob([html], { type: 'text/html' });

    const text = componentRef.current.textContent ?? '';
    const textBlob = new Blob([text], { type: 'text/plain' });

    const clipboardItem = new ClipboardItem({
      [htmlBlob.type]: htmlBlob,
      [textBlob.type]: textBlob,
    });

    return navigator.clipboard.write([clipboardItem]);
  };

  const handleEditable = () => {
    setEditable(!editable);
  };

  return (
    <Flex direction="column" gap="2" align="center">
      <Heading size="3">{t('project.Letter')}</Heading>
      <Flex direction="row" justify="end" gap="2">
        <Tooltip content={t('project.Edit')}>
          <Button color="gray" onClick={handleEditable} variant="outline">
            {editable ? <LiaCheckSolid /> : <LiaEdit />}
          </Button>
        </Tooltip>
        <Tooltip content={t('project.Copy')}>
          <Button color="gray" onClick={handleCopy} variant="outline">
            <PiCopySimple />
          </Button>
        </Tooltip>
        <Tooltip content={t('project.Print')}>
          <Button color="gray" onClick={handlePrint} variant="outline">
            <PiPrinter />
          </Button>
        </Tooltip>
      </Flex>
      <Box
        ref={componentRef}
        p="5"
        px="9"
        style={{
          backgroundColor: 'var(--gray-a2)',
          borderRadius: 'var(--radius-3)',
          boxShadow: 'var(--shadow-4)',
          width: 1000,
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: editable ? 'var(--iris-10)' : 'var(--gray-a3)',
        }}
        minWidth="600"
        contentEditable={editable ? 'plaintext-only' : 'false'}
      >
        <Section py="3" style={{ width: 400 }}>
          <Text as="p" style={{ marginBottom: 16 }}>
            {personName}
          </Text>
          <Text as="p" weight="bold" style={{ marginBottom: 16 }}>
            {t('project.BUSINESS CONFIDENTIAL')}
          </Text>
          <Text as="p" style={{ marginBottom: 16 }}>
            {today}
          </Text>
          <Text as="p" style={{ marginBottom: 16 }}>
            <Text>{t('project.The Honourable Joel Lightbound MP')}</Text>
            <br />
            <Text>{t('project.Chair House of Commons Standing')}</Text>
            <br />
            <Text>{t('project.Committee on Industry and Technology')}</Text>
            <br />
            <Text>{t('project.House of Commons')}</Text>
            <br />
            <Text>{t('project.Ottawa Ontario K1A 0A6')}</Text>
          </Text>
        </Section>

        <Section py="3">
          {parseText?.map((item, index) => (
            <Text as="p" key={index} style={{ marginBottom: 16 }}>
              {item}
            </Text>
          ))}
          <Text as="p" style={{ marginBottom: 16 }}>
            {personName}
          </Text>
        </Section>
      </Box>
    </Flex>
  );
};
