import React, { useEffect, useState, useContext } from "react";
import DatePicker from "react-datepicker";
import { Form } from "../../layout/form/Form";
import { TimeBlock } from "./timeBlock/TimeBlock";
import { UserContext } from "../../context/user/UserProvider";
import "react-datepicker/dist/react-datepicker.css";
import "./_reservation.scss";

import data from "../../../data.json";

interface IAddDays {
	date: number;
	month: number;
}

interface ISelectedDate {
	date: string;
	time: string;
}

const addDays = (date: IAddDays) => {
	let result = new Date();

	result.setMonth(date.month);
	result.setDate(date.date);

	return result;
};

const Reservation: React.FC = () => {
	// Date from data.json
	const [dateData, setDateData] = useState<any>(null);
	// Time from data.json
	const [timeData, setTimeData] = useState<any>([]);

	const { setDate, setTime } = useContext(UserContext);

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

	// Set date in Context API
	const setUserDate = () => {
		setDate(dateData);
	};
	useEffect(setUserDate, [dateData]);

	return (
		<section className="reservation">
			<Form>
				<div className="calendar__section">
					<DatePicker
						dateFormat="dd/MM/yyy"
						selected={dateData}
						onChange={(date) => setDateData(date)}
						minDate={new Date()}
						isClearable
						// From DATA include dates only in the future
						includeDates={data.map((date: any) => addDays(date))}
						inline
					/>
				</div>
				<div className="time__section">
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
		</section>
	);
};

export { Reservation };
/*  */
