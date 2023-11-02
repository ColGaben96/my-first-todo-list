"use client";
import styles from './page.module.css';
import {TodoList} from "@/components/TodoList/page";
import {TodoSearch} from "@/components/TodoSearch/page";
import {TodoCounter} from "@/components/TodoCounter/page";
import {CreateItemButton} from "@/components/ui/CreateItem/page";
import {TodoContext} from "@/api/TodoContext";
import {TodoItem} from "@/components/TodoItem/page";

export function Home() {
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
                            deleteTodo,
                            totalTodos,
                            completedTodos,
                            searchValue,
                            setSearchValue,
                        }
                    ) => (
                        <div>
                            <TodoCounter
                                total={totalTodos}
                                completed={completedTodos}/>
                            <div className={styles.searchGrid}>
                                <TodoSearch/>
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
                                            onComplete={() => completeTodo({
                                                variables: {id: todo.id, isCompleted: !todo.isCompleted}
                                            })}
                                            onEdit={() => console.log("Editando")}
                                            onDelete={() => deleteTodo({
                                                variables: {id: todo.id}
                                            })}
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
