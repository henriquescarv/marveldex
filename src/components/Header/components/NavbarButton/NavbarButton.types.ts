import { ReactNode } from "react";

export type ButtonProps = {
  onClick: () => void,
  title?: string,
  disabled?: boolean,
  label?: string,
  icon?: ReactNode,
}