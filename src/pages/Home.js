import Header from "../components/Header";
import "../styles/style.css";
import { Outlet } from "react-router-dom";

export default function Home() {
	return (
		<>
			<Header />
			<hr />
			<Outlet />
		</>
	);
}
