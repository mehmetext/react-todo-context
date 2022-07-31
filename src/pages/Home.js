import Header from "../components/Header";
import "../styles/style.css";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Home() {
	return (
		<>
			<Helmet>
				<title>Todo App</title>
			</Helmet>
			<Header />
			<hr />
			<Outlet />
		</>
	);
}
