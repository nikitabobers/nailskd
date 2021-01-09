import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Form } from "../../../layout/form/Form";
import { FormLabel } from "../../../layout/form/FormLabel";
import { UserContext } from "../../../context/user/UserProvider";
import "./_reservationUser.scss";

const ReservationUser: React.FC = () => {
  const { name, phone, setName, setPhone } = useContext(UserContext);

  return (
    <section className="reservation reservation--user">
      <Form>
        <h2>About you</h2>
        <FormLabel
          label="Name"
          inputType="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormLabel
          label="Phone"
          inputType="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="section__button">
          <Link to="/reservation/date" className="btn btn--grey">
            Back
          </Link>
          <Link to="/reservation/confirm" className="btn btn--primary ">
            Next
          </Link>
        </div>
      </Form>
    </section>
  );
};

export { ReservationUser };
