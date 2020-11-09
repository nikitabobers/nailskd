import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./_reservation.scss";

const data = {};

const Reservation = () => {
	const inputProps = {
		placeholder: "Date",
	};

	const [startDate, setStartDate] = useState<any>(null);

	useEffect(() => {
		if (startDate != null) {
			console.log(startDate.getDay());
			console.log(new Date());
		}
	}, [startDate]);

	return (
		<section className="reservation">
			<DatePicker
				dateFormat="dd/MM/yyy"
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				minDate={new Date()}
				isClearable
				// maxDate
				// filterDate
				// showTimeSelect
				// excludeTimes
			/>
		</section>
	);
};

export { Reservation };
