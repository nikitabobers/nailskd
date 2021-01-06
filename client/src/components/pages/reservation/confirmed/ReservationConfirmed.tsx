import React from "react";
import { Link } from "react-router-dom";
import icon from "../../../../assets/icons/icon.svg";
import "./_reservationConfirmed.scss";

const ReservationConfirmed = () => {
  return (
    <section className="reservation reservation--confirmed">
      <h2>
        Thank you <br /> for reservation !
      </h2>
      <img src={icon} alt="nails" />
      <Link to="/" className="btn btn--primary">
        Home page
      </Link>
    </section>
  );
};

export { ReservationConfirmed };
