import type { Component, Ref } from "vue";

export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";
export type NativeType = "button" | "reset" | "submit";
export type ButtonSize = "large" | "default" | "small";

export interface ButtonProps {
  tag?: string | Component
  type?: ButtonType;
  size?: ButtonSize;
  nativeType?: NativeType;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  circle?: boolean;
  // block?: boolean;
  plain?: boolean;
  round?: boolean;
  autofocus?: boolean;
  loadingIcon?: string;
  useThrottle?: boolean;
  throttleDuration?: number;
  // square?: boolean;
  // onClick?: (event: MouseEvent) => void 
}

export interface ButtonEmits {
  (e: 'click', val: MouseEvent): void;
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>
}