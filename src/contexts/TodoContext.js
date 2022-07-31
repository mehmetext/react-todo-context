import { createContext, useContext, useReducer } from "react";
import { todoReducer } from "../reducers";

const Context = createContext();

const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(todoReducer, {
		todos:
			localStorage.getItem("todos") != null
				? JSON.parse(localStorage.getItem("todos"))
				: [],
		todo:
			localStorage.getItem("todo") != null
				? localStorage.getItem("todo")
				: "",
	});

	const data = {
		...state,
		dispatch,
	};

	return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useTodo = () => useContext(Context);

export default Provider;
