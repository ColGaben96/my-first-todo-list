"use client";
import styles from './page.module.css';
import {TodoList} from "@/components/TodoList/page";
import {useLocalTempData} from "@/api/useLocalTempData";
import {useState} from "react";
import {TodoSearch} from "@/components/TodoSearch/page";
import {TodoCounter} from "@/components/TodoCounter/page";

export default function Home() {
  const [todoData, setTodoData] = useState(useLocalTempData);
  return (
      <div>
        <TodoCounter/>
        <TodoSearch/>
        <TodoList todoArray={todoData}/>
      </div>
  )
}
