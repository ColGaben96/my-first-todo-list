"use client";
import {TodoList} from "@/components/TodoList/page";
import {useLocalTempData} from "@/api/useLocalTempData";
import {useState} from "react";

export default function Home() {
  const [todoData, setTodoData] = useState(useLocalTempData);
  return (
    <TodoList todoArray={todoData}/>
  )
}
