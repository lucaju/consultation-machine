'use client';

import { Flex } from '@radix-ui/themes';
import { Form } from './form';
import { Result } from './result';

export const Madlib = () => {
  return (
    <Flex direction="column" gap="2" align="center">
      <Form />
      <Result />
    </Flex>
  );
};
