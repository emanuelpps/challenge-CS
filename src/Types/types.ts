export interface IFormProgress {
  progress?: number;
  setProgress: (progress: number) => void;
}

export interface NameInput {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}

export interface FormDataValues {
  name: string;
  jobPosition?: string;
  challenge?: string;
  CRM?: string;
  industry?: string;
  setName: (name: string) => void;
  setJobPosition?: (jobPosition: string) => void;
  setChallenge?: (challenge: string) => void;
  setCRM?: (CRM: string) => void;
  setIndustry?: (industry: string) => void;
}

export interface ButtonProps {
  text?: string;
  type?: string;
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: string;
  keyValue?: string;
}

export interface ButtonSelectorProps {
  progress?: number;
}
