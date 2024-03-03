import { ChangeEvent } from 'react';

export type InputProps = {
  id?: string;
  error?: string;
  value?: string;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
}
