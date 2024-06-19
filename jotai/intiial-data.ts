import { MadlibPart } from '@/types';
import { nanoid } from 'nanoid';

export const madlibStructureEN: MadlibPart[] = [
  {
    id: nanoid(11),
    type: 'heading',
    value: 'Customize your prompt',
  },
  {
    id: nanoid(11),
    type: 'text',
    value:
      'I heard the Canadian government is running a public policy consultation aimed at regulating AI in Canada.',
  },
  {
    id: nanoid(11),
    type: 'text', //
    value: 'I need help crafting a letter to participate in this consultation.',
  },
  {
    id: nanoid(11),
    type: 'text', //
    value: 'My name is',
  },
  {
    id: nanoid(11),
    type: 'input',
    name: 'person_name',
    placeholder: 'insert name',
    value: '',
  },
  { id: nanoid(11), type: 'text', value: '.' },
  { id: nanoid(11), type: 'text', value: 'I am a' },
  {
    id: nanoid(11),
    type: 'input',
    name: 'age',
    placeholder: 'insert age',
    value: '',
  },
  { id: nanoid(11), type: 'text', value: 'year old' },
  {
    id: nanoid(11),
    type: 'input',
    name: 'profession',
    placeholder: 'insert profession',
    value: '',
  },
  {
    id: nanoid(11),
    type: 'text',
    value: 'from',
  },
  {
    id: nanoid(11),
    type: 'input',
    name: 'location',
    placeholder: 'insert location',
    value: '',
  },
  {
    id: nanoid(11),
    type: 'text',
    value: '.',
  },
  {
    id: nanoid(11),
    type: 'text',
    value: 'I am',
  },
  {
    id: nanoid(11),
    type: 'input',
    name: 'emotion',
    placeholder: 'insert emotion or feeling',
    value: '',
  },
  {
    id: nanoid(11),
    type: 'text',
    value: 'about the use of AI for',
  },
  { id: nanoid(11), type: 'input', name: 'issue1', placeholder: 'issue', value: '' },
  { id: nanoid(11), type: 'text', value: 'and' },
  { id: nanoid(11), type: 'input', name: 'issue2', placeholder: 'issue', value: '' },
  {
    id: nanoid(11),
    type: 'text',
    value: '.',
  },
  {
    id: nanoid(11),
    type: 'text',
    value:
      'Please draft a letter to the committee chair using these details and expressing how Canada should regulate AI accordingly.',
  },
  {
    id: nanoid(11),
    type: 'heading',
    value: 'Customize your writing style',
  },
  {
    id: nanoid(11),
    type: 'text',
    value: 'Please write in a',
  },
  {
    id: nanoid(11),
    type: 'select',
    name: 'tone',
    options: ['humble', 'respectful', 'civil', 'concerned', 'aggressive'],
    value: 'respectful',
  },
  { id: nanoid(11), type: 'text', value: 'tone and in a' },
  {
    id: nanoid(11),
    type: 'select',
    name: 'tone',
    options: ['formal', 'informal', 'academic', 'slang', 'polite', 'silly'],
    value: 'formal',
  },
  { id: nanoid(11), type: 'text', value: 'style.' },
  { id: nanoid(11), type: 'text', value: 'The letter should contain at least' },
  {
    id: nanoid(11),
    type: 'select',
    name: 'size',
    options: ['1', '2', '3', '4', '5'],
    value: '3',
  },
  { id: nanoid(11), type: 'text', value: 'paragraphs.' },
];

export const madlibStructureFR: MadlibPart[] = [
  {
    id: nanoid(11),
    type: 'heading',
    value: 'Personnalisez votre demande',
  },
  {
    id: nanoid(11),
    type: 'text',
    value:
      "J'ai entendu dire que le gouvernement canadien menait une consultation de politique publique visant à réglementer l'IA au Canada.",
  },
  {
    id: nanoid(11),
    type: 'text',
    value: "J'ai besoin d'aide pour rédiger une lettre pour participer à cette consultation.",
  },
  {
    id: nanoid(11),
    type: 'text',
    value: "Je m'appelle",
  },
  {
    id: nanoid(11),
    type: 'input',
    name: 'person_name',
    placeholder: 'insérez votre nom',
    value: '',
  },
  { id: nanoid(11), type: 'text', value: '.' },
  { id: nanoid(11), type: 'text', value: "J'ai" },
  {
    id: nanoid(11),
    type: 'input',
    name: 'age',
    placeholder: 'insérez votre âge',
    value: '',
  },
  { id: nanoid(11), type: 'text', value: 'ans et je suis' },
  {
    id: nanoid(11),
    type: 'input',
    name: 'profession',
    placeholder: 'insérez votre profession',
    value: '',
  },
  {
    id: nanoid(11),
    type: 'text',
    value: 'de',
  },
  {
    id: nanoid(11),
    type: 'input',
    name: 'location',
    placeholder: 'insérez la ville où vous résidez',
    value: '',
  },
  {
    id: nanoid(11),
    type: 'text',
    value: '.',
  },
  {
    id: nanoid(11),
    type: 'select',
    name: 'emotion_',
    options: ['Je suis', "J'ai"],
    value: 'Je suis',
  },
  {
    id: nanoid(11),
    type: 'input',
    name: 'emotion',
    placeholder: 'insérez une émotion ou un sentiment',
    value: '',
  },
  { id: nanoid(11), type: 'text', value: "par rapport à l'utilisation de l'IA pour" },
  {
    id: nanoid(11),
    type: 'input',
    name: 'issue1',
    placeholder: 'insérez un problème ou un sujet',
    value: '',
  },
  { id: nanoid(11), type: 'text', value: 'and' },
  {
    id: nanoid(11),
    type: 'input',
    name: 'issue2',
    placeholder: 'insérez un problème ou un sujet',
    value: '',
  },
  {
    id: nanoid(11),
    type: 'text',
    value: '.',
  },
  {
    id: nanoid(11),
    type: 'text',
    value:
      "Veuillez rédiger une lettre au président du comité en utilisant ces détails et en expliquant comment le Canada devrait réglementer l'IA en conséquence.",
  },
  {
    id: nanoid(11),
    type: 'heading',
    value: "Personnalisez votre style d'écriture",
  },
  {
    id: nanoid(11),
    type: 'text',
    value: 'Veuillez écrire sur le ton',
  },
  {
    id: nanoid(11),
    type: 'select',
    name: 'tone',
    options: ['humble', 'respectueux', 'civil', 'concerné', 'agressif'],
    value: 'respectueux',
  },
  { id: nanoid(11), type: 'text', value: 'et dans un style' },
  {
    id: nanoid(11),
    type: 'select',
    name: 'tone',
    options: ['officiel', 'informel', 'académique', 'argot', 'poli', 'cocasse'],
    value: 'officiel',
  },
  { id: nanoid(11), type: 'text', value: 'style.' },
  { id: nanoid(11), type: 'text', value: 'La lettre doit contenir au moins' },
  {
    id: nanoid(11),
    type: 'select',
    name: 'size',
    options: ['1', '2', '3', '4', '5'],
    value: '3',
  },
  { id: nanoid(11), type: 'text', value: 'paragraphes.' },
];
