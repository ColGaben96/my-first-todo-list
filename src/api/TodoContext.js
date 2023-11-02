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
        (todo) => {
            const todoText = todo.title.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        }
    );
    const completeTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        );
        newTodos[todoIndex].isCompleted = true;
        saveTodos(newTodos);
    };

    const editTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        );
        newTodos[todoIndex].isEditable = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    const saveTodo = (id, newTodo) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        );
        newTodos[todoIndex] = newTodo;
        newTodos[todoIndex].isEditable = false;
        console.log(newTodos[todoIndex]);
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider value={{
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
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};