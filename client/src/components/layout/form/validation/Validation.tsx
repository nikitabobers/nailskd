import React, { createContext, useState, useEffect } from "react";

interface IError {
  nameError: string;
  phoneError: string;
  validate(type: string, value: string): boolean;
  noError: boolean;
}

export const ErrorContext = createContext<IError>({} as IError);

const ValidationProvider: React.FC = (props) => {
  const [errorState, setErrorState] = useState<IError>({} as IError);
  const [noError, setNoError] = useState(false);

  const validate = (type: string, value: string) => {
    if (value === "" || value === undefined) {
      return false;
    } else {
      switch (type) {
        case "name":
          if (value.length < 3) {
            setErrorState((prev) => ({
              ...prev,
              [type + "Error"]: "Minimum 2 characters",
            }));
            return false;
          }
          break;
        default:
          break;
      }
    }
    return true;
  };

  return (
    <ErrorContext.Provider
      value={{
        nameError: errorState.nameError,
        phoneError: errorState.phoneError,
        validate,
        noError,
      }}
    >
      {props.children}
    </ErrorContext.Provider>
  );
};

export { ValidationProvider };
