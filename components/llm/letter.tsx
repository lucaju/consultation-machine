'use client';

import { llmResultAtom, madlibAtom } from '@/jotai/store';
import { Box, Button, Section, Text } from '@radix-ui/themes';
import { format } from 'date-fns';
import { useAtomValue } from 'jotai';
import { useCallback, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export const Letter = () => {
  const llmResult = useAtomValue(llmResultAtom);
  const madlib = useAtomValue(madlibAtom);

  const componentRef = useRef(null);

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

  return (
    <Box
      ref={componentRef}
      p="5"
      px="9"
      style={{
        backgroundColor: 'var(--gray-a2)',
        borderRadius: 'var(--radius-3)',
        boxShadow: 'var(--shadow-4)',
        // transform: 'rotate(-1deg)',
        width: 800,
      }}
      minWidth="600"
    >
      <Button onClick={handlePrint}>print</Button>
      <Section py="3" style={{ width: 330 }}>
        <Text as="p" style={{ marginBottom: 16 }}>
          {personName}
        </Text>
        <Text as="p" weight="bold" style={{ marginBottom: 16 }}>
          BUSINESS CONFIDENTIAL
        </Text>
        <Text as="p" style={{ marginBottom: 16 }}>
          {today}
        </Text>
        <Text as="p" style={{ marginBottom: 16 }}>
          <Text>The Honourable Joël Lightbound, M.P.</Text>
          <br />
          <Text>Chair, House of Commons Standing</Text>
          <br />
          <Text>Committee on Industry and Technology</Text>
          <br />
          <Text>House of Commons</Text>
          <br />
          <Text>Ottawa, Ontario K1A 0A6</Text>
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
  );
};
