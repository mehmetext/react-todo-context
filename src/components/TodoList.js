import { useTodo } from "../contexts";

export default function TodoList() {
	const { todos } = useTodo();

	return (
		<ul>
			{todos.map((item) => (
				<li key={item.id}>{item.text}</li>
			))}
		</ul>
	);
}
