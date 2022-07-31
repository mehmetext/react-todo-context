import { useTodo } from "../contexts";
import { Link } from "react-router-dom";

export default function Header() {
	const { todos } = useTodo();

	return (
		<h1>
			<Link to="/">Todo App</Link> ({todos.length})
		</h1>
	);
}
