import React from "react";
import "./_form.scss";

const Form = ({ submit, children }: any) => {
  return (
    <form className="form" onSubmit={submit}>
      {children}
    </form>
  );
};

export { Form };
