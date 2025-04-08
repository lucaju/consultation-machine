import { contributionOpenedAtom } from '@/jotai/store';
import { Box } from '@radix-ui/themes';
import { useAtomValue } from 'jotai';

export const Letter = () => {
  const contributionOpened = useAtomValue(contributionOpenedAtom);
  return (
    <Box
      p="5"
      px="9"
      style={{
        backgroundColor: 'var(--gray-a2)',
        borderRadius: 'var(--radius-3)',
        boxShadow: 'var(--shadow-4)',
        width: 950,
      }}
      dangerouslySetInnerHTML={{ __html: contributionOpened?.content ?? '' }}
    />
  );
};
