import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./_reservation.scss";

import data from "../../../data.json";
import { Form } from "../../layout/form/Form";

interface IAddDays {
	date: Date;
	days: number;
}

const addDays = (days: number, month: number) => {
	let result = new Date();

	result.setMonth(month);

	result.setDate(days);

	return result;
};

const Reservation = () => {
	const [selectedDate, setSelectedDate] = useState<any>(null);

	useEffect(() => {}, [selectedDate]);

	return (
		<section className="reservation">
			<Form>
				<label>
					Pick date
					<DatePicker
						dateFormat="dd/MM/yyy"
						selected={selectedDate}
						onChange={(date) => setSelectedDate(date)}
						minDate={new Date()}
						isClearable
						includeDates={data.map((date: any) =>
							addDays(date.date, date.month)
						)}
					/>
				</label>
				<label>
					Pick time
					<input type="checkbox" />
				</label>
			</Form>
		</section>
	);
};

export { Reservation };
