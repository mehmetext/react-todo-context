import { useTodo } from "../contexts";
import { Link } from "react-router-dom";

export default function TodoList() {
	const { todos } = useTodo();

	return (
		<>
			<Link to="add-todo">Add New Todo</Link>
			<ul>
				{todos.map((item) => (
					<li key={item.id}>
						<Link to={`/${item.id}`}>{item.text}</Link>
					</li>
				))}
			</ul>
		</>
	);
}
