import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form } from "../../../layout/form/Form";
import { FormLabel } from "../../../layout/form/FormLabel";
import { UserContext } from "../../../context/user/UserProvider";
import { ErrorContext } from "../../../layout/form/validation/Validation";
import { Button } from "../../../layout/button/Button";
import "./_reservationUser.scss";

const ReservationUser: React.FC = () => {
  const { name, phone, setName, setPhone } = useContext(UserContext);
  const { nameError, phoneError, validate } = useContext(ErrorContext);
  let history = useHistory();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    validate("name", name);
    validate("phone", phone);

    if (validate("name", name) && validate("phone", phone)) {
      history.push("/reservation/confirm");
    }
  };

  return (
    <section className="reservation reservation--user">
      <Form submit={(e: any) => handleSubmit(e)}>
        <h2>About you</h2>
        <FormLabel
          label="Name"
          inputType="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          errorMessage={nameError}
        />
        <FormLabel
          label="Phone"
          inputType="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          errorMessage={phoneError}
        />
        <div className="section__button">
          <Link to="/reservation/date" className="btn btn--grey">
            Back
          </Link>
          <Button btnStyle="btn--primary" type="submit">
            Next
          </Button>
        </div>
      </Form>
    </section>
  );
};

export { ReservationUser };
