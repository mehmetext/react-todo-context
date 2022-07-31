import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTodo } from "../contexts";

export default function DeleteTodo() {
	const { todoID } = useParams();
	const { dispatch } = useTodo();
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			dispatch({ type: "DELETE-TODO", value: todoID });
			setLoading(false);

			setTimeout(() => {
				navigate("/");
			}, 1500);
		}, 250);
	}, []);

	if (loading) return <p>Siliniyor...</p>;

	return <p>Silindi, yönlendiriliyorsunuz...</p>;
}
