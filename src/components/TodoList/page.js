import {TodoItem} from "@/components/TodoItem/page";

export function TodoList({todoArray}) {
    return (
        <div>
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