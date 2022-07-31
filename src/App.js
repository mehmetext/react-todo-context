import { TodoProvider } from "./contexts";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AddTodo from "./pages/AddTodo";
import TodoList from "./pages/TodoList";
import Todo from "./pages/Todo";
import DeleteTodo from "./pages/DeleteTodo";

function App() {
	return (
		<TodoProvider>
			<Routes>
				<Route path="/" element={<Home />}>
					<Route index element={<TodoList />} />
					<Route path=":todoID" element={<Todo />} />
					<Route path=":todoID/delete" element={<DeleteTodo />} />
					<Route path="add-todo" element={<AddTodo />} />
				</Route>
			</Routes>
		</TodoProvider>
	);
}

export default App;
