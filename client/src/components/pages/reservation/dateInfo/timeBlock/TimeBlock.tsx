import React from "react";
import "./_timeBlock.scss";

interface ITimeBlock {
	labelName: string;
	id: number;
	handleChange: Function;
}

const checkValue = (x: any) => {
	const valueLS = localStorage.getItem("time");
	if (valueLS === x) return true;
	return false;
};

const TimeBlock = ({ labelName, id, handleChange }: ITimeBlock) => {
	return (
		<div className="time__block">
			<input
				type="radio"
				value={labelName}
				name="radio"
				id={id.toString()}
				onChange={(e) => handleChange(e.target.value)}
				defaultChecked={checkValue(labelName)}
			/>
			<label htmlFor={id.toString()}>{labelName}</label>
		</div>
	);
};

export { TimeBlock };
