import { TodoProvider } from "./contexts";
import Home from "./pages/Home";

function App() {
	return (
		<TodoProvider>
			<Home />
		</TodoProvider>
	);
}

export default App;
