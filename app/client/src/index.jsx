import "./styles/globals.scss";
import "the-new-css-reset/css/reset.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import React from "react";
import ReactDOM from "react-dom/client";
import UserProvider from "./Context/UserProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<UserProvider>
			<AppRouter />
		</UserProvider>
	</BrowserRouter>,
);
