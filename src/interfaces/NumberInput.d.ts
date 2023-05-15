export interface MyNumberInputProps {
  min: number;
  defaultValue: number;
  value: number;
  placeholder?: string;
  onChange: (value: number) => void;
  variant?: string;
  size?: "sm" | "md" | "lg";
  labelName?: string;
  isReadOnly?: boolean;
  marginLeft?: string;
}
