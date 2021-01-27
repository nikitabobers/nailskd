import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Form } from "../../../layout/form/Form";
import { TimeBlock } from "./timeBlock/TimeBlock";
import { UserContext } from "../../../context/user/UserProvider";
import { Button } from "../../../layout/button/Button";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./_reservationDate.scss";

import { useQuery, gql } from "@apollo/client";

const GET_DATES = gql`
  query GetDates {
    dates {
      date
      time
    }
  }
`;

const addDays = (date: any) => {
  let result = new Date(date.date);
  return result;
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
  const { loading, error, data } = useQuery(GET_DATES);

  // Date from data.json
  const [dateData, setDateData] = useState<any>(null);
  // Time from data.json
  const [timeData, setTimeData] = useState<any>([]);

  // Set inital date in DatePicker
  useEffect(() => {
    if (data) {
      const valueLS = localStorage.getItem("date");
      const dateLS = new Date(valueLS!);

      let initialDate;

      if (valueLS) {
        initialDate = dateLS;
      } else {
        initialDate = new Date(data.dates[0].date);
      }

      setDateData(initialDate);
    }
  }, [data]);

  // Get times for TimeBlock components
  useEffect(() => {
    if (dateData != null) {
      const dayDate = dateData.getDate();

      // Find selected date in DB
      const dateDB = data.dates.find(
        (day: any) => new Date(day.date).getDate() === dayDate
      );

      const timeValues = dateDB.time;

      if (dateDB) {
        setTimeData(timeValues.map((x: any) => x));
      }
    }
  }, [dateData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const handleOnChange = (date: Date | [Date, Date] | null) => {
    setDateData(date);
    setDate(date);
  };

  return (
    <section className="reservation reservation--date">
      <Form>
        <div className="calendar">
          <DatePicker
            dateFormat="dd/MM/yyy"
            selected={dateData}
            onChange={(date) => handleOnChange(date)}
            minDate={new Date()}
            isClearable
            includeDates={data.dates.map((date: any) => addDays(date))}
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
