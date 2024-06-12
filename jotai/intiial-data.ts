import { MadlibPart } from '@/types';

export const madlibStructure: MadlibPart[] = [
  { type: 'text', id: '1', value: 'Once upon a time, there was a ' },
  { type: 'input', id: 'adjective', placeholder: 'Adjective', value: '' },
  { type: 'input', id: 'noun', placeholder: 'Noun', value: '' },
  { type: 'text', id: '2', value: ' who loved to ' },
  { type: 'input', id: 'verb', placeholder: 'Verb', value: '' },
  { type: 'select', id: 'food', options: ['apple', 'banana', 'grape'], value: 'apple' },
  { type: 'text', id: '2', value: '.' },
];
