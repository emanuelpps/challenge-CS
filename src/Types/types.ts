export interface IFormProgress {
  progress: number;
  setProgress: (progress: number) => void;
}

export interface NameInput {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}

export interface FormDataValues {
  name: string;
  jobPosition: string;
  challenge: string;
  CRM: string;
  industry: string;
  setData: (key: keyof FormDataValues, value: string) => void;
}

export interface ButtonSelectorProps {
  progress?: number;
}
