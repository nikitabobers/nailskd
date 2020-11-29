import React from "react";
import { UserProvider } from "./user/UserProvider";

const AppState: React.FC = ({ children }) => {
	return <UserProvider>{children}</UserProvider>;
};

export default AppState;
