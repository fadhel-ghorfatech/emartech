import { useCallback, useMemo } from "react";
import { Box, FormControl, MenuItem, Select as SelectItem, Typography, styled } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { FieldTitle } from "./fieldTitle";
import { InputFieldVariants } from "../constants";

export interface SelectStyleProps {
  borderRadius?: string,
  marginBottom?: string,
  maxWidth?: string,
  width?: string,
}

export interface TitleStyle {
  color?: string,
  fontSize?: string,
}
export interface DropdownProps<T extends string> {
  componentStyles?: SelectStyleProps,
  defaultValue?: T,
  disabled?: boolean,
  displayEmpty?: boolean,
  error?: boolean,
  inputProps?: SelectProps,
  isRequired: boolean,
  label?: string,
  name?: string,
  onChange: (e: SelectChangeEvent<T>) => void,
  options: T[] | { value: T, label: string }[],
  placeholder?: string,
  titleStyle?: TitleStyle,
  value?: T,
  variant?: InputFieldVariants,
}

export interface SelectProps {
  sx?: {
    backgroundColor?: string,
    color?: string,
    fontSize?: string,
    padding?: string,
    paddingTop?: string,
  }
}

const titleFieldStyle = {
  fontSize: "0.75rem",
  marginBottom: "0.5rem",
};

export function Select<T extends string>(props: DropdownProps<T>) {
  const {
    componentStyles,
    defaultValue,
    disabled,
    displayEmpty,
    error,
    inputProps,
    isRequired,
    label,
    name,
    onChange,
    options,
    placeholder,
    titleStyle,
    value,
    variant,
  } = props;

  const _fieldTitle = useMemo(() => (
    label && (
      <FieldTitle
        isRequired={isRequired}
        label={label}
        sx={titleStyle ?? titleFieldStyle}
      />
    )
  ), [isRequired, label, titleStyle]);

  const Options = useMemo(() => (
    options.map((option, index) => {
      const stringOpt = typeof option === "string";
      return (
        <MenuItem
          divider={true}
          key={index}
          value={stringOpt ? option : option.value}

        >
          {stringOpt ? option : option.label}
        </MenuItem>
      );
    })
  ), [options]);

  const renderValue = useCallback((selected: any) => {
    if (selected) return selected;
    return <Typography>{placeholder}</Typography>;
  }, [placeholder]);

  return (
    <SelectWrapper componentStyles={componentStyles}>
      {_fieldTitle}
      <FormControl fullWidth variant={variant} size="small" disabled={disabled}>
        <SelectItem
          defaultValue={defaultValue}
          displayEmpty={displayEmpty}
          error={error}
          inputProps={inputProps}
          name={name}
          onChange={onChange}
          renderValue={placeholder !== undefined ? renderValue : undefined}
          required={isRequired}
          value={value}
        >
          {Options}
        </SelectItem>
      </FormControl>
    </SelectWrapper>
  );
}


const SelectWrapper = styled(Box, {
  shouldForwardProp: prop => prop !== "componentStyles",
})<Pick<DropdownProps<string>, "componentStyles">>(({ componentStyles }) => ({
  ...componentStyles,
  "& .MuiOutlinedInput-root": {
    borderRadius: "0",
  },
}));
