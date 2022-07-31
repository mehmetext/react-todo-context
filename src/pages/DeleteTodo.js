import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTodo } from "../contexts";
import { Helmet } from "react-helmet";

export default function DeleteTodo() {
	const { todoID } = useParams();
	const { dispatch } = useTodo();
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		const findTodo = () => {
			setLoading(true);
			setTimeout(() => {
				dispatch({ type: "DELETE-TODO", value: todoID });
				setLoading(false);

				setTimeout(() => {
					navigate("/");
				}, 1500);
			}, 250);
		};

		findTodo();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			<Helmet>
				<title>Deleting Todo - Todo App</title>
			</Helmet>
			{loading ? (
				<p>Siliniyor...</p>
			) : (
				<p>Silindi, yönlendiriliyorsunuz...</p>
			)}
		</>
	);
}
