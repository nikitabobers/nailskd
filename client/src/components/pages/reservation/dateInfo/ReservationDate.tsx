import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { Form } from "../../../layout/form/Form";
import { TimeBlock } from "./timeBlock/TimeBlock";
import { UserContext } from "../../../context/user/UserProvider";
import "react-datepicker/dist/react-datepicker.css";
import "./_reservation.scss";

import data from "../../../../data.json";
import { Button } from "../../../layout/button/Button";

interface IAddDays {
	date: number;
	month: number;
}

const addDays = (date: IAddDays) => {
	let result = new Date();

	result.setMonth(date.month);
	result.setDate(date.date);

	return result;
};

const showButtonNext = () => {
	return (
		<div className="section__button">
			<Button btnStyle="btn--grey btn--medium">Clear</Button>
			<Link to="/reservation/user" className="btn btn--primary btn--medium">
				Next
			</Link>
		</div>
	);
};

const ReservationDate: React.FC = () => {
	// Date from data.json
	const [dateData, setDateData] = useState<any>(null);
	// Time from data.json
	const [timeData, setTimeData] = useState<any>([]);

	const { time, date, setDate, setTime } = useContext(UserContext);

	// Get times for TimeBlock components
	useEffect(() => {
		if (dateData != null) {
			const f = dateData.getDate();
			const result = data.find((x) => x.date === f);

			if (result) {
				setTimeData(result.times.map((x: any) => x));
			}
		}
	}, [dateData]);

	const setUserDate = () => setDate(dateData);
	useEffect(setUserDate, [dateData]);

	const showButtonNext = () => {
		if (date && time) {
			return (
				<div className="section__button">
					<Button btnStyle="btn--grey btn--medium">Clear</Button>
					<Link to="/reservation/user" className="btn btn--primary btn--medium">
						Next
					</Link>
				</div>
			);
		}
	};

	return (
		<section className="section__reservation">
			<Form>
				<div className="section__calendar">
					<DatePicker
						dateFormat="dd/MM/yyy"
						selected={dateData}
						onChange={(date) => setDateData(date)}
						minDate={new Date()}
						isClearable
						includeDates={data.map((date: any) => addDays(date))}
						inline
					/>
				</div>
				<div className="section__time">
					{timeData.map((value: any, index: number) => (
						<TimeBlock
							key={index}
							id={index}
							labelName={value}
							handleChange={(select: any) => setTime(select)}
						/>
					))}
				</div>
			</Form>

			{showButtonNext()}
		</section>
	);
};

export { ReservationDate };
{
}

// const showButton = () => {
// 	if (date && time)
// 		return (
// 			<Link to="/reservation/user" className="btn btn--primary">
// 				Make appointment
// 			</Link>
// 		);
// };
