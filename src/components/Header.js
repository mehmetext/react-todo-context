import { useTodo } from "../contexts";

export default function Header() {
	const { todos } = useTodo();

	return <h1>Todo App ({todos.length})</h1>;
}
