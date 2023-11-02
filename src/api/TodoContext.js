"use client";
import { createContext, useState } from "react";
import { useLocalTempData } from "./useLocalTempData";

const TodoContext = createContext();
function TodoProvider({children}) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalTempData('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const completedTodos = todos.filter(todo => !!todo.isCompleted).length;
    const totalTodos = todos.length;
    const searchedTodos = todos.filter(
        todo => todo.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};