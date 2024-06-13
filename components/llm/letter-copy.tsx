'use client';

import { llmResultAtom, madlibAtom } from '@/jotai/store';
// import { llmResultAtom } from '@/jotai/store';
import { Box, Section, Text } from '@radix-ui/themes';
// import { useAtomValue } from 'jotai';
import { format } from 'date-fns';
import { useAtomValue } from 'jotai';

export const Letter = () => {
  const llmResult = useAtomValue(llmResultAtom);
  const madlib = useAtomValue(madlibAtom);

  const name = madlib.find((item) => item.id === 'person_name')?.value || 'Anonymous';

  // const name = 'Sam';
  const today = format(new Date(), 'MMM dd, yyyy');

  return (
    <Box
      p="5"
      px="9"
      style={{
        backgroundColor: 'var(--gray-a2)',
        borderRadius: 'var(--radius-3)',
        boxShadow: 'var(--shadow-4)',
        // transform: 'rotate(-1deg)',
        // width: 600
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
        <Text as="p" style={{ marginBottom: 16 }}>
          Mr. Lightbound:
        </Text>
        <Text as="p" style={{ marginBottom: 16 }}>
          I am writing to offer my insights and perspectives on the proposed AI regulation under
          consideration by the government of Canada. As a concerned citizen deeply invested in the
          ethical deployment of technological advancements, I commend the government's proactive
          approach in navigating the complexities surrounding artificial intelligence. Undoubtedly,
          AI represents a pivotal leap forward in human progress, offering unparalleled potential to
          revolutionize various sectors, from healthcare to transportation, and beyond.
        </Text>
        <Text as="p" style={{ marginBottom: 16 }}>
          However, while celebrating the transformative power of AI, it is paramount to acknowledge
          and address its ethical implications. One of the foremost concerns that warrant our
          attention is the potential misuse of AI for surveillance and military purposes. As a
          staunch advocate for privacy rights and international peace, I urge the government to
          prioritize stringent regulations that safeguard against the indiscriminate surveillance of
          citizens and the weaponization of AI technology.
        </Text>
        <Text as="p" style={{ marginBottom: 16 }}>
          Moreover, beyond human-centric considerations, I am deeply concerned about the welfare of
          our beloved companions, cats, and dogs. AI-driven surveillance systems, if not carefully
          regulated, pose a significant threat to their well-being, potentially infringing upon
          their right to privacy and autonomy. Additionally, the prospect of AI-powered drones and
          autonomous weapons raises alarming possibilities for the safety and security of our furry
          friends, necessitating comprehensive safeguards to protect them from harm.
        </Text>
        <Text as="p" style={{ marginBottom: 16 }}>
          Furthermore, as a connoisseur of culinary delights, I cannot overlook the potential risks
          that AI poses to another cherished aspect of our lives: chocolate cakes. The integration
          of AI in food production and distribution systems, while promising efficiency gains, also
          introduces vulnerabilities that may compromise food safety standards. From contamination
          risks to supply chain disruptions, the unchecked proliferation of AI in the food industry
          could jeopardize the integrity and deliciousness of our beloved chocolate cakes. In
          conclusion,
        </Text>
        <Text as="p" style={{ marginBottom: 16 }}>
          In conclusion, I implore the government to adopt a balanced approach to AI regulation that
          fosters innovation while upholding fundamental ethical principles. By prioritizing
          transparency, accountability, and the protection of individual rights, we can harness the
          full potential of AI for the betterment of society while mitigating its potential
          pitfalls. Together, let us chart a course towards a future where technological progress is
          synonymous with human flourishing and ethical stewardship.
        </Text>
        <Text as="p" style={{ marginBottom: 16 }}>
          Thank you for considering my input on this crucial matter.
        </Text>
        <Text as="p" style={{ marginBottom: 16 }}>
          Sincerely,
        </Text>
        <Text as="p" style={{ marginBottom: 16 }}>
          {name}
        </Text>
      </Section>
    </Box>
  );
};



const tt = `[Your Name]  
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
