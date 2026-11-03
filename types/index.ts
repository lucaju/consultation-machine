type MadlibCommon = {
  id: string;
  value: string;
};

type MadlibHeading = {
  type: 'heading';
} & MadlibCommon;

type MadlibText = {
  type: 'text';
} & MadlibCommon;

type MadlibInput = {
  type: 'input';
  name: string;
  placeholder?: string;
  minWidth?: number;
} & MadlibCommon;

type MadlibSelect = {
  type: 'select';
  name: string;
  options: string[];
} & MadlibCommon;

export type MadlibPart = MadlibHeading | MadlibText | MadlibInput | MadlibSelect;

/// ------

export type ContributionData = {
  id: string;
  date: string;
  content: string;
  summary?: string;
  sentiment?: string;
  policyDraft?: string;
};
