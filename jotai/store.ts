import { MadlibPart } from '@/types';
import { atom } from 'jotai';
import { madlibStructure } from './intiial-data';

export const madlibAtom = atom<MadlibPart[]>([...madlibStructure]);
madlibAtom.debugLabel = 'madlib.Atom';

export const madlibReadyAtom = atom(false);
madlibReadyAtom.debugLabel = 'madlibReady.Atom';

export const llmResultAtom = atom<string | null>(null);
llmResultAtom.debugLabel = 'llmResult.Atom';
