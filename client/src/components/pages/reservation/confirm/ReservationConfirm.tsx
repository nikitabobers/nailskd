import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Form } from "../../../layout/form/Form";
import { UserContext } from "../../../context/user/UserProvider";
import { FormLabel } from "../../../layout/form/FormLabel";
import "./_reservationConfirm.scss";

const getFullDateName = (date: Date) => {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  return `${day} ${month}`;
};

const ReservationConfirm = () => {
  const { name, phone, time, date } = useContext(UserContext);
  const dateNew = new Date(date);

  return (
    <section className="reservation reservation--confirm">
      <Form>
        <h2>Your reservation</h2>
        <div className="reservation__labels">
          <FormLabel
            label="Name"
            inputType="text"
            value={name}
            disabled={true}
          />
          <FormLabel
            label="Phone"
            inputType="number"
            value={phone}
            disabled={true}
          />
          <FormLabel
            label="Time"
            inputType="text"
            value={time}
            disabled={true}
          />
          <FormLabel
            label="Date"
            inputType="text"
            value={getFullDateName(dateNew)}
            disabled={true}
          />
        </div>
        <div className="section__button">
          <Link to="/reservation/user" className="btn btn--grey">
            Back
          </Link>
          <Link to="/reservation/confirmed" className="btn btn--primary ">
            Confirm
          </Link>
        </div>
      </Form>
    </section>
  );
};

export { ReservationConfirm };
