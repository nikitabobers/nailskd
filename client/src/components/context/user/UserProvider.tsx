import React, { createContext, useState } from "react";

interface User {
	name: string;
	phone: number;
	date: Date;
	time: string;
	setName(name: string): void;
	setPhone(phone: number): void;
	setDate(date: Date): void;
	setTime(time: string): void;
}

export const UserContext = createContext<User>({} as User);

const UserProvider: React.FC = (props) => {
	const [state, setState] = useState<User>({} as User);

	const setName = (name: string) => {
		setState({ ...state, name: name });
	};

	const setPhone = (phone: number) => {
		setState({ ...state, phone: phone });
	};

	const setDate = (date: Date) => {
		setState({ ...state, date: date });
	};

	const setTime = (time: string) => {
		setState({ ...state, time: time });
	};

	return (
		<UserContext.Provider
			value={{
				name: state.name,
				phone: state.phone,
				date: state.date,
				time: state.time,
				setName,
				setPhone,
				setDate,
				setTime,
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export { UserProvider };
