import { ReactNode } from "react";

export type ButtonProps = {
  onClick: () => void,
  disabled?: boolean,
  label?: string,
  icon?: ReactNode,
}