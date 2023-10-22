import styles from './page.module.css';
import {CompleteItemButton} from "@/components/ui/CompleteItem/page";
export function TodoItem({isCompleted, dueDate, title, content}) {
    const completed = isCompleted ? styles.todoCompleted : styles.todo;
    return (
        <div className={`${completed}`}>
            <CompleteItemButton status={isCompleted}/>
            <span className={styles.todoDueDate}>{dueDate}</span>
            <h1 className={styles.todoTitle}>{title}</h1>
            <p className={styles.todoContent}>{content}</p>
        </div>
  )
}