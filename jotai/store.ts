import { ContributionData, MadlibPart } from '@/types';
import { atom, createStore } from 'jotai';

export const madlibAtom = atom<MadlibPart[]>([]);
madlibAtom.debugLabel = 'madlib.Atom';

export const madlibReadyAtom = atom(false);
madlibReadyAtom.debugLabel = 'madlibReady.Atom';

export const llmResultAtom = atom<string | null>(null);
llmResultAtom.debugLabel = 'llmResult.Atom';

export const letterAtom = atom<string | null>(null);
letterAtom.debugLabel = 'letter.Atom';

export const contributionOpenedAtom = atom<ContributionData | null>(null);
contributionOpenedAtom.debugLabel = 'contributionOpened.Atom';

export const newContributionIdAtom = atom<string | null>(null);
newContributionIdAtom.debugLabel = 'newContributionId.Atom';

export const summaryAllAtom = atom<string | null>(null);
summaryAllAtom.debugLabel = 'summaryAll.Atom';

export const sentimentAllAtom = atom<string | null>(null);
sentimentAllAtom.debugLabel = 'sentimentAll.Atom';

export const rootStore = createStore();
