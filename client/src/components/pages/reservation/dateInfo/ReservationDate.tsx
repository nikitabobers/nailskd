import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Form } from "../../../layout/form/Form";
import { TimeBlock } from "./timeBlock/TimeBlock";
import { UserContext } from "../../../context/user/UserProvider";
import { Button } from "../../../layout/button/Button";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./_reservationDate.scss";

import data from "../../../../data.json";

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

const getInitialDate = (dataValue: any) => {
  const dateFromData = new Date(2021, dataValue.month, dataValue.date);
  const dateFromLS = localStorage.getItem("date");
  const p = new Date(dateFromLS!);
  if (dateFromLS) return p;
  else return dateFromData;
};

const showButtons = (date: Date, time: string) => {
  if (date && time) {
    return (
      <div className="section__button">
        <Button btnStyle="btn btn--grey">Clear</Button>
        <Link to="/reservation/user" className="btn btn--primary">
          Next
        </Link>
      </div>
    );
  }
};

const ReservationDate: React.FC = () => {
  const { time, date, setDate, setTime } = useContext(UserContext);

  const firstDayFromData = data[0];
  // Date from data.json
  const [dateData, setDateData] = useState<any>(
    getInitialDate(firstDayFromData)
  );
  // Time from data.json
  const [timeData, setTimeData] = useState<any>([]);

  // Get times for TimeBlock components
  useEffect(() => {
    if (dateData != null) {
      const day = dateData.getDate();
      const result = data.find((x) => x.date === day);

      if (result) {
        setTimeData(result.times.map((x: any) => x));
      }
    }
  }, [dateData]);

  const setUserDate = () => setDate(dateData);
  useEffect(setUserDate, [dateData]);

  return (
    <section className="reservation reservation--date">
      <Form>
        <div className="calendar">
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
        <div className="time-list">
          {timeData.map((value: any, index: number) => (
            <TimeBlock
              key={index}
              id={index}
              labelName={value}
              handleChange={(select: any) => setTime(select)}
            />
          ))}
        </div>
        {showButtons(date, time)}
      </Form>
    </section>
  );
};

export { ReservationDate };
