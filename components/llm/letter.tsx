'use client';

import { llmResultAtom, madlibAtom } from '@/jotai/store';
import { Box, Section, Text } from '@radix-ui/themes';
import { format } from 'date-fns';
import { useAtomValue } from 'jotai';

export const Letter = () => {
  const llmResult = useAtomValue(llmResultAtom);
  const madlib = useAtomValue(madlibAtom);

  const name = madlib.find((item) => item.id === 'person_name')?.value || 'Anonymous';

  const today = format(new Date(), 'MMM dd, yyyy');

  const parseText = llmResult
    ?.trim()
    .replaceAll(/\[[^\]]*\]/g, '')
    .split('\n');

  return (
    <Box
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
      <Section py="3" style={{ width: 330 }}>
        <Text as="p" style={{ marginBottom: 16 }}>
          {name}
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
        {/* <Text as="p" style={{ marginBottom: 16 }}>
          Mr. Lightbound:
        </Text> */}
        {parseText?.map((item, index) => (
          <Text as="p" key={index} style={{ marginBottom: 16 }}>
            {item}
          </Text>
        ))}
        <Text as="p" style={{ marginBottom: 16 }}>
          {name}
        </Text>
      </Section>
    </Box>
  );
};