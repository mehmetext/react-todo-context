import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTodo } from "../contexts";
import NoTodo from "../components/NoTodo";
import { Helmet } from "react-helmet";

export default function Todo() {
	const { todoID } = useParams();
	const { todos, dispatch } = useTodo();
	const [todo, setTodo] = useState(false);
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setTodo(todos.find((item) => item.id === todoID));
			setLoading(false);
		}, 250);

		return () => {
			setTodo(false);
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	const handleDelete = () => {
		let confirm = window.confirm(
			"Bu todo'yu silmek istediğine emin misin?"
		);

		if (confirm) {
			navigate("delete");
		}
	};

	const handleCompleted = () => {
		dispatch({ type: "TOGGLE-COMPLETED", value: todoID });
	};

	if (loading) return <p>Loading...</p>;

	if (!todo) return <NoTodo />;

	return (
		<>
			<Helmet>
				<title>Todo - Todo App</title>
			</Helmet>
			<p>{todo.text}</p>
			<label>
				<input
					defaultChecked={todo.completed}
					onChange={handleCompleted}
					type="checkbox"
				/>{" "}
				Tamamlandı
			</label>
			<br />
			<br />
			<button onClick={handleDelete}>Sil</button>
		</>
	);
}
