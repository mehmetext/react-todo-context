import { nanoid } from "nanoid";

export default function todoReducer(state, action) {
	switch (action.type) {
		case "ADD-TODO":
			const addingTodos = [
				{
					id: nanoid(),
					text: state.todo,
					completed: false,
				},
				...state.todos,
			];

			localStorage.removeItem("todo");
			localStorage.setItem("todos", JSON.stringify(addingTodos));

			return {
				...state,
				todos: addingTodos,
				todo: "",
			};

		case "DELETE-TODO":
			const deletingTodos = state.todos.filter(
				(item) => item.id !== action.value
			);

			localStorage.setItem("todos", JSON.stringify(deletingTodos));

			return {
				...state,
				todos: deletingTodos,
			};

		case "TOGGLE-COMPLETED":
			const toggleCompletedTodos = state.todos.map((item) => {
				if (item.id === action.value) {
					item.completed = !item.completed;
				}
				return item;
			});

			localStorage.setItem("todos", JSON.stringify(toggleCompletedTodos));

			return {
				...state,
				todos: toggleCompletedTodos,
			};

		case "SET-TODO":
			localStorage.setItem("todo", action.value);
			return { ...state, todo: action.value };

		default:
			return { ...state };
	}
}
