import { atom } from 'jotai';
import { atomWithReset } from 'jotai/utils';

export const addContributionOpenAtom = atomWithReset(false);
addContributionOpenAtom.debugLabel = 'open.Atom';

export const processStepAtom = atomWithReset<
  'image-capture' | 'text-extraction' | 'summary' | 'done' | null
>(null);
processStepAtom.debugLabel = 'processStep.Atom';

export const imageCapturedAtom = atomWithReset<string | null>(null);
imageCapturedAtom.debugLabel = 'imageCaptured.Atom';

export const textExtractedAtom = atomWithReset<string | null>(null);
textExtractedAtom.debugLabel = 'textExtracted.Atom';

export const summaryAtom = atomWithReset<string | null>(null);
summaryAtom.debugLabel = 'llmResult.Atom';

export const sentimentAtom = atomWithReset<string | null>(null);
sentimentAtom.debugLabel = 'sentiment.Atom';

export const resetAtom = atom(null, (_get, set) => {
  set(processStepAtom, null);
  set(imageCapturedAtom, null);
  set(textExtractedAtom, null);
  set(summaryAtom, null);
  set(sentimentAtom, null);
});
resetAtom.debugLabel = 'reset.Atom';
