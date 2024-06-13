'use client';

import { llmResultAtom, madlibAtom } from '@/jotai/store';
import { Box, Section, Text } from '@radix-ui/themes';
import { format } from 'date-fns';
import { useAtomValue } from 'jotai';

const useTestData = true;

export const Letter = () => {
  const llmResult = useAtomValue(llmResultAtom);
  const madlib = useAtomValue(madlibAtom);

  const name = madlib.find((item) => item.id === 'person_name')?.value || 'Anonymous';

  const today = format(new Date(), 'MMM dd, yyyy');

  const data = useTestData ? testData : llmResult;

  const parseText = data
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

const testData = `[Your Name]  
[Your Address]  
[City, Province, Postal Code]  
[Email Address]  
[Date]  

Committee Chair  
[Committee Name]  
[House of Commons/Parliament Building]  
[City, Province, Postal Code]  

Dear Committee Chair,  

I am writing to express my strong opinions and concerns regarding the potential use of artificial intelligence (AI) in certain areas, particularly in the context of making cookies and washing sidewalks. As an Artisan, I firmly believe in the value of traditional arts and crafts, and I am worried about the impact that AI technology could have on the authenticity and uniqueness of handmade products. Using AI to automate tasks like baking cookies or cleaning sidewalks not only diminishes the artisanal quality of these processes but also raises ethical and environmental concerns that cannot be overlooked.

Furthermore, the idea of applying AI technology in nonsensical scenarios such as managing events like the Poke Noses and Beavers World Cup or navigating a yellow submarine seems not only impractical but also potentially harmful. The whimsical nature of these examples highlights the absurdity that AI could bring into various aspects of our lives if not properly regulated. By delegating important decisions and responsibilities to autonomous systems, we risk losing the human touch and creativity that are integral to our society.

It is essential for policymakers to consider the broader implications of AI deployment and to prioritize ethical frameworks that protect human values and interests. As an artisan who values craftsmanship and creativity, I urge the committee to approach AI regulation with caution and foresight. Striking a balance between technological innovation and preserving human ingenuity is crucial to ensuring a sustainable and harmonious future for all. I hope my input will be taken into account as you navigate this complex and evolving landscape.

Thank you for the opportunity to contribute to this important public consultation. I am committed to supporting initiatives that promote responsible AI use and safeguard the principles that define our humanity. Please feel free to contact me if you require further information or would like to discuss this matter in more detail. 

Sincerely,  

[Your Signature]  
[Your Name]  `;
