import { TextField } from "@mui/material";
import { HTMLInputTypeAttribute, forwardRef, useMemo } from "react";
import { FieldTitle } from "./fieldTitle";
import { InputFieldVariants } from "../constants";

export interface InputFieldStyleProps {
  marginBottom?: string,
  width?: string,
}

export interface InputFieldProps {
  componentStyles?: InputFieldStyleProps,
  defaultValue?: string | number | null,
  disabled?: boolean,
  error?: boolean,
  id?: string,
  InputProps?: InputProps,
  inputStyles?: InputStyleProps,
  isRequired?: boolean,
  label?: string,
  labelStyling?: InputLabelStyleProps,
  name?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string,
  type?: HTMLInputTypeAttribute,
  value?: string | number | null,
  variant?: InputFieldVariants,
  labelClassName?: string,
}

export interface InputProps {
  endAdornment?: React.ReactNode,
}

export interface InputStyleProps {
  style?: {
    backgroundColor?: string,
    borderRadius?: string,
    maxHeight?: string,
    padding?: string,
    paddingTop?: string,
  }
}

export interface InputLabelStyleProps {
  color?: string,
}

export const InputField = forwardRef<HTMLDivElement, InputFieldProps>((props, ref) => {
  const {
    isRequired = false,
    label,
    placeholder = "",
    labelClassName,
    ...passthrough
  } = props;

  const _fieldTitle = useMemo(() => (
    label && (
      <FieldTitle
        isRequired={isRequired}
        label={label}
        className={labelClassName}
      />
    )
  ), [isRequired, label]);

  return (
    <>
      {_fieldTitle}
      <TextField
        placeholder={placeholder}
        ref={ref}
        required={isRequired}
        {...passthrough}
      />
    </>
  );
});
