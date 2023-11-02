import {TodoProvider} from "@/api/TodoContext";
import {Home} from "@/app/pageui";

export default function App() {
    return (
        <TodoProvider>
            <Home/>
        </TodoProvider>
    );
}