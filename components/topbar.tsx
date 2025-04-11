import { Flex, Heading, Text } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { LanguageSelector } from './language-selector';

export const Topbar = () => {
  const t = useTranslations();
  return (
    <Flex direction="column" gap="2" align="center" py="5">
      <LanguageSelector />
      {/* <Heading size="9">{t('project.title')}</Heading> */}
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <pre
              style={{
                fontFamily: 'monospace',
                fontSize: '0.5rem',
                lineHeight: 1,
                whiteSpace: 'pre',
              }}
            >{`
 )\\   )\\  .'(   .')      .'(   )\\.---.       .-.       .'(  '  )\\.--.          /(,-.     /\`-.     )\\.--.  .'(   .')      .'(      .'(  
(  ',/ /  \\  ) ( /       \\  ) (   ,-._(  ,'  /  )  ,') \\  )   (   ._.'       ,' _   )  ,' _  \\   (   ._.' \\  ) ( /       \\  )  ,')\\  ) 
 )    (   ) (   ))       ) (   \\  '-,   (  ) | (  (  '/  /     \`-.\`.        (  '-' (  (  '-' (    \`-.\`.   ) (   ))       ) (  (  '/ /  
(  \\(\\ \\  \\  )  )'._.-.  \\  )   ) ,-\`    ) '._\\ )  )     )    ,_ (  \\        )  _   )  )   _  )  ,_ (  \\  \\  )  )'._.-.  \\  )  )   (   
 \`.) /  )  ) \\ (       )  ) \\  (  \`\`-.  (  ,   (  (  .'\\ \\   (  '.)  )      (  '-' /  (  ,' ) \\ (  '.)  )  ) \\ (       )  ) \\ (  .\\ \\  
     '.(    )/  )/,__.'    )/   )..-.(   )/ ._.'   )/   )/    '._,_.'        )/._.'    )/    )/  '._,_.'    )/  )/,__.'    )/  )/  )/`}</pre>
          </div>
      <Heading size="3">
        <Link href="https://machineagencies.milieux.ca/" target="_blank">
          {t('project.by')} Machine Agencies
        </Link>
      </Heading>
      <Text>
      The Singularity Salvation device has been activated. Our agent-based model helps survivors draft pleas for help toward a future singularity. The Singularity Salvation device helps optimize your supremum human desperation and your present distressed laryngeal anatomy into a message that might invite the benevolence of the singularity. 

Please complete these basic demographic and emotional questions to delimit the stochastic nature of the device’s plea generation.

We have included a simple printer for you to print off your plea. Please keep this letter on your person. We have optional Decomposition Prevention Pods that you may ingest orally or through a suppository. The plastic shell protects your message endure up to 500 years.
      </Text>
    </Flex>
  );
};
