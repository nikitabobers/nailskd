import React, { createContext, useState, useEffect } from "react";

interface IError {
  nameError: string;
  phoneError: string;
  validate(type: string, value: any): boolean;
}

export const ErrorContext = createContext<IError>({} as IError);

const regex = /^[0-9]{7,12}$/;

const setErrorMessage = (f: Function, type: string, msg: string) => {
  return f((prev: any) => ({
    ...prev,
    [type + "Error"]: msg,
  }));
};

const clearErrorMessage = (f: Function, type: string) => {
  return f((prev: any) => ({
    ...prev,
    [type + "Error"]: "",
  }));
};

const ValidationProvider: React.FC = (props) => {
  const [errorState, setErrorState] = useState<IError>({} as IError);

  const validate = (type: string, value: any) => {
    switch (type) {
      case "name":
        if (value === undefined || value.length < 3) {
          setErrorMessage(
            setErrorState,
            type,
            "Please eneter minimum 3 characters"
          );
          return false;
        } else {
          clearErrorMessage(setErrorState, type);
          return true;
        }
      case "phone":
        if (regex.test(value)) {
          clearErrorMessage(setErrorState, type);
          return true;
        } else {
          setErrorMessage(
            setErrorState,
            type,
            "Please enter valid phone number"
          );
          return false;
        }
      default:
        break;
    }
    return false;
  };

  return (
    <ErrorContext.Provider
      value={{
        nameError: errorState.nameError,
        phoneError: errorState.phoneError,
        validate,
      }}
    >
      {props.children}
    </ErrorContext.Provider>
  );
};

export { ValidationProvider };
