"use client";
import styles from './page.module.css';
import {TodoList} from "@/components/TodoList/page";
import {useLocalTempData} from "@/api/useLocalTempData";
import {useState} from "react";

export default function Home() {
  const [todoData, setTodoData] = useState(useLocalTempData);
  return (
      <div>
        <TodoList todoArray={todoData}/>
      </div>
  )
}
