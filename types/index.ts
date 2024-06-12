type MadlibCommon = {
  id: string;
  value: string;
};

type MadlibText = {
  type: 'text';
} & MadlibCommon;

type MadlibInput = {
  type: 'input';
  placeholder?: string;
} & MadlibCommon;

type MadlibSelect = {
  type: 'select';
  options: string[];
} & MadlibCommon;

export type MadlibPart = MadlibText | MadlibInput | MadlibSelect;
