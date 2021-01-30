import React from "react";
import "./_timeBlock.scss";

interface ITimeBlock {
  labelName: string;
  id: number;
  handleChange: Function;
}

const checkValue = (value: string) => {
  const valueLS = localStorage.getItem("time");
  if (valueLS === value) return true;
  return false;
};

const removeSeconds = (timeValue: string) => {
  return timeValue.slice(0, -3);
};

const TimeBlock = ({ labelName, id, handleChange }: ITimeBlock) => {
  return (
    <div className="time__block">
      <input
        type="radio"
        value={removeSeconds(labelName)}
        name="radio"
        id={id.toString()}
        onChange={(e) => handleChange(e.target.value)}
        defaultChecked={checkValue(removeSeconds(labelName))}
      />
      <label htmlFor={id.toString()}>{removeSeconds(labelName)}</label>
    </div>
  );
};

export { TimeBlock };
