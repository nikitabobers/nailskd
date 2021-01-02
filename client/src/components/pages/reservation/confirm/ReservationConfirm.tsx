import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Form } from "../../../layout/form/Form";
import { UserContext } from "../../../context/user/UserProvider";
import "./_reservationConfirm.scss";

const ReservationConfirm = () => {
	const { name, phone, time, date } = useContext(UserContext);

	return (
		<section className="section__reservation--confirm">
			<Form>
				<h2>Your reservation</h2>
				<div className="reservation__labels">
					<label>
						Name
						<input type="text" disabled placeholder="Bob" />
					</label>
					<label>
						Phone
						<input type="text" disabled placeholder="+372909090" />
					</label>
					<label>
						Date
						<input type="text" disabled placeholder="12 February" />
					</label>
					<label>
						Time
						<input type="text" disabled placeholder="12:00" />
					</label>
				</div>
				<div className="section__button">
					<Link to="/reservation/user" className="btn btn--grey">
						Back
					</Link>
					<Link to="/reservation/confirm" className="btn btn--primary ">
						Confirm
					</Link>
				</div>
			</Form>
		</section>
	);
};

export { ReservationConfirm };
