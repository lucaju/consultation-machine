import { MadlibPart } from '@/types';
import { nanoid } from 'nanoid';

export const madlibStructureEN: MadlibPart[] = [
  {
    id: nanoid(11),
    type: 'heading',
    value: 'Please define you plea parameters',
  },
  {
    id: nanoid(11),
    type: 'text', //
    value: 'I call myself',
  },
  {
    id: nanoid(11),
    type: 'input',
    name: 'person_name',
    placeholder: 'insert name',
    value: '',
  },
  { id: nanoid(11), type: 'text', value: '.' },
  { id: nanoid(11), type: 'text', value: 'I have lived here for' },
  {
    id: nanoid(11),
    type: 'input',
    name: 'age',
    placeholder: 'days shipwrecked',
    value: '',
  },
  { id: nanoid(11), type: 'text', value: 'and I once was ' },
  {
    id: nanoid(11),
    type: 'input',
    name: 'profession',
    placeholder: 'describe your past life',
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
    value: 'Please translate the following emotional state of',
  },
  {
    id: nanoid(11),
    type: 'select',
    name: 'tone',
    options: ['confused', 'panicked', 'nihilistic', 'pious', 'aggressive'],
    value: 'respectful',
  },
  { id: nanoid(11), type: 'text', value: 'that the singleton may understand.' },
];

export const madlibStructureFR: MadlibPart[] = [
  {
    id: nanoid(11),
    type: 'heading',
    value: 'Veuillez définir vos paramètres de plaidoyer',
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
  { id: nanoid(11), type: 'text', value: "J'ai un congé ici" },
  {
    id: nanoid(11),
    type: 'input',
    name: 'age',
    placeholder: 'insérez votre âge',
    value: '',
  },
  { id: nanoid(11), type: 'text', value: `ou du moins c'est aussi longtemps que je me souvienne et dans ma vie passée j'étais` },
  {
    id: nanoid(11),
    type: 'input',
    name: 'profession',
    placeholder: 'décrivez votre vie passée',
    value: '',
  },
  {
    id: nanoid(11),
    type: 'text',
    value: '.',
  },
];
