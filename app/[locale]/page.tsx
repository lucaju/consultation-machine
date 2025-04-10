import { LLM } from '@/components/llm';
import { Madlib } from '@/components/madlib';
import { Topbar } from '@/components/topbar';
import { Container, Flex } from '@radix-ui/themes';

export default function IndexPage() {
  return (
    <>
      <Container size="2">
        <Flex direction="column" gap="7" align="center">
          <Topbar />
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
          <Madlib />
          <LLM />
        </Flex>
      </Container>
    </>
  );
}
