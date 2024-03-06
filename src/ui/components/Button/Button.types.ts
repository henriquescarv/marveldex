import { ReactNode } from "react";

export type ButtonProps = {
  label: string | ReactNode,
  disabled?: boolean,
  normalWidth?: boolean,
  onClick: () => void,
};
