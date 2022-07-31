import AddTodo from "../components/AddTodo";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import "../styles/style.css";

export default function Home() {
	return (
		<div>
			<Header />
			<AddTodo />
			<TodoList />
		</div>
	);
}
