import {TodoItem} from "@/components/TodoItem/page";
import {CreateItemButton} from "@/components/ui/CreateItem/page";

export function TodoList({todoArray}) {
    return (
        <div>
            <CreateItemButton/>
            {todoArray.map((todo) => (
                <TodoItem
                    key={todo.id}
                    title={todo.title}
                    content={todo.content}
                    dueDate={todo.dueDate}
                    isCompleted={todo.isCompleted}/>
            ))}
        </div>
    );
}