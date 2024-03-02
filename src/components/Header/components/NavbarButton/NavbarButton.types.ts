import { ReactNode } from "react";

export type ButtonProps = {
  onClick: () => void,
  label?: string,
  icon?: ReactNode,
}