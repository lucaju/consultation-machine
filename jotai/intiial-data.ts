import { MadlibPart } from '@/types';

// export const madlibStructure: MadlibPart[] = [
//   { type: 'text', id: '1', value: 'Once upon a time, there was a ' },
//   { type: 'input', id: 'adjective', placeholder: 'Adjective', value: '' },
//   { type: 'input', id: 'noun', placeholder: 'Noun', value: '' },
//   { type: 'text', id: '2', value: ' who loved to ' },
//   { type: 'input', id: 'verb', placeholder: 'Verb', value: '' },
//   { type: 'select', id: 'food', options: ['apple', 'banana', 'grape'], value: 'apple' },
//   { type: 'text', id: '2', value: '.' },
// ];

export const madlibStructure: MadlibPart[] = [
  { type: 'text', id: '1', value: 'My name is' },
  { type: 'input', id: 'person_name', placeholder: 'Your name', value: '' },
  { type: 'text', id: '2', value: '. I am a' },
  { type: 'input', id: 'profession', placeholder: 'Your profession', value: '' },
  { type: 'text', id: '3', value: '. I am very ' },
  { type: 'input', id: 'adjective', placeholder: 'adjective', value: '' },
  {
    type: 'text',
    id: '4',
    value:
      'about the AI technology. I heard the Canadian government is making a public consultation to regulate AI in Canada. I need help crafting a letter to participate in this public consultation. Please write a letter to the committee chair. Express my strong opinions ',
  },
  {
    type: 'select',
    id: 'choice1',
    options: ['against', 'in favour of', 'indiference in'],
    value: 'indiference in',
  },
  { type: 'text', id: '5', value: 'using AI for' },
  { type: 'input', id: 'issue1', placeholder: 'issue', value: '' },
  { type: 'text', id: '7', value: 'and' },
  { type: 'input', id: 'issue2', placeholder: 'issue', value: '' },
  { type: 'text', id: '8', value: '.Emphasize the' },
  {
    type: 'select',
    id: 'choice2',
    options: ['dangerous', 'beneficial', 'catastrophic', 'non-sensical'],
    value: 'non-sensical',
  },
  { type: 'text', id: '9', value: 'impact of AI for' },
  { type: 'input', id: 'issue3', placeholder: 'issue', value: '' },
  { type: 'text', id: '10', value: 'and' },
  { type: 'input', id: 'issue4', placeholder: 'issue', value: '' },
  { type: 'text', id: '11', value: 'and the' },
  {
    type: 'select',
    id: 'choice3',
    options: ['harm', 'relief', 'absurdity'],
    value: 'absurdity',
  },
  { type: 'text', id: '12', value: 'it can cause to' },
  { type: 'input', id: 'issue5', placeholder: 'issue', value: '' },
  { type: 'text', id: '13', value: '. The letter should be' },
  { type: 'select', id: 'style', options: ['respectful', 'humble', 'civil'], value: 'respectful' },
  { type: 'text', id: '14', value: 'and' },
  { type: 'select', id: 'tone', options: ['formal', 'informal', 'academic'], value: 'formal' },
  { type: 'text', id: '15', value: '. Please write at least' },
  { type: 'select', id: 'size', options: ['three', 'four', 'five', 'six'], value: 'five' },
  { type: 'text', id: '16', value: 'paragraphs.' },
];
