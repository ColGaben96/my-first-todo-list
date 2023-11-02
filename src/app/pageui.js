"use client";
import styles from './page.module.css';
import {TodoList} from "@/components/TodoList/page";
import {TodoSearch} from "@/components/TodoSearch/page";
import {TodoCounter} from "@/components/TodoCounter/page";
import {CreateItemButton} from "@/components/ui/CreateItem/page";
import {TodoContext, TodoProvider} from "@/api/TodoContext";
import {TodoItem} from "@/components/TodoItem/page";

export function Home() {
    function setTitle(title) {
        return title;
    }

    function setContent(content) {
        return content;
    }

    function setDueDate(dueDate) {
        return dueDate;
    }

    const handleSave = (todo) => {
        TodoProvider.saveTodo(todo.id, todo);
    }
    return (
        <>
            <TodoContext.Consumer>
                {
                    (
                        {
                            error,
                            loading,
                            searchedTodos,
                            completeTodo,
                            editTodo,
                            deleteTodo,
                            saveTodo,
                            totalTodos,
                            completedTodos,
                            searchValue,
                            setSearchValue
                        }
                    ) => (
                        <div>
                            <TodoCounter
                                total={totalTodos}
                                completed={completedTodos}/>
                            <div className={styles.searchGrid}>
                                <TodoSearch
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}/>
                                <CreateItemButton/>
                            </div>
                            <TodoList>
                                {loading && (
                                    <>
                                        <p>Cargando</p>
                                    </>
                                )}
                                {error && (
                                    <>
                                        <p>Hubo un error</p>
                                    </>
                                )}
                                {(!loading && !searchedTodos.length) && (
                                    <>
                                        <p>Crea tu primer TODO</p>
                                    </>
                                )}
                                {
                                    searchedTodos.map(todo => (
                                        <TodoItem
                                            key={todo.id}
                                            title={todo.title}
                                            content={todo.content}
                                            dueDate={todo.dueDate}
                                            isCompleted={todo.isCompleted}
                                            isEditable={todo.isEditable}
                                            onComplete={() => completeTodo(todo.id)}
                                            onEdit={() => editTodo(todo.id)}
                                            onDelete={() => deleteTodo(todo.id)}
                                            onSave={handleSave}
                                            setTitle={(title) => setTitle(title)}
                                            setContent={(content) => setContent(content)}
                                            setDueDate={(dueDate) => setDueDate(dueDate)}
                                        />
                                    ))
                                }
                            </TodoList>
                        </div>
                    )
                }
            </TodoContext.Consumer>
        </>
    )
}
