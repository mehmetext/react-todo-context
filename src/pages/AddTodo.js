import { useTodo } from "../contexts";

export default function AddTodo() {
	const { todo, dispatch } = useTodo();

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch({ type: "ADD-TODO" });
	};

	const handleOnChange = (e) => {
		dispatch({ type: "SET-TODO", value: e.target.value });
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input value={todo} onChange={handleOnChange} />
				<button disabled={!todo}>Add</button>
			</form>
		</>
	);
}
