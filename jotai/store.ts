import { MadlibPart } from '@/types';
import { atom } from 'jotai';

export const madlibAtom = atom<MadlibPart[]>([]);
madlibAtom.debugLabel = 'madlib.Atom';

export const madlibReadyAtom = atom(false);
madlibReadyAtom.debugLabel = 'madlibReady.Atom';

export const llmResultAtom = atom<string | null>(null);
llmResultAtom.debugLabel = 'llmResult.Atom';
