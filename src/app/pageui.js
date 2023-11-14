"use client";
import styles from './page.module.css';
import {TodoList} from "@/components/TodoList/page";
import {TodoSearch} from "@/components/TodoSearch/page";
import {TodoCounter} from "@/components/TodoCounter/page";
import {CreateItemButton} from "@/components/ui/CreateItem/page";
import {TodoContext} from "@/api/TodoContext";
import {TodoItem} from "@/components/TodoItem/page";

export function Home() {
    function setTitle(title, todo) {
        todo.title = title;
        return todo;
    }

    function setContent(content, todo) {
        todo.content = content;
        return todo;
    }

    function setDueDate(dueDate, todo) {
        todo.dueDate = dueDate;
        return todo;
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
                                            onSave={() => saveTodo(todo.id, todo)}
                                            setTitle={(title) => setTitle(title, todo)}
                                            setContent={(content) => setContent(content, todo)}
                                            setDueDate={(dueDate) => setDueDate(dueDate, todo)}
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
