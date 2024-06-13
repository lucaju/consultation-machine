import { Flex, Heading } from '@radix-ui/themes';
import Link from 'next/link';

export const Topbar = () => {
  return (
    <Flex direction="column" gap="2" align="center" py="5">
      <Heading size="9">Consultation Machine</Heading>
      <Heading size="3">
        <Link href="https://machineagencies.milieux.ca/" target="_blank">
          By Machine Agencies
        </Link>
      </Heading>
    </Flex>
  );
};
