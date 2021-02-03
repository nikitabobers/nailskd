import React from "react";

interface IFormLabel {
  label: string;
  inputType: string;
  value?: number | string;
  placeholder?: string;
  disabled?: boolean;
  onChange?(e: any): void;
  errorMessage?: string;
}

const FormLabel: React.FC<IFormLabel> = ({
  label,
  inputType,
  value,
  placeholder,
  disabled,
  onChange,
  errorMessage,
}) => {
  return (
    <label>
      {label}
      <input
        type={inputType}
        name={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      <p className="error--message">{errorMessage}</p>
    </label>
  );
};

export { FormLabel };
