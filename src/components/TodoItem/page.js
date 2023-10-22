import styles from './page.module.css';
import {CompleteItemButton} from "@/components/ui/CompleteItem/page";
import {EditItemButton} from "@/components/ui/EditItem/page";
import {DeleteItemButton} from "@/components/ui/DeleteItem/page";
export function TodoItem({isCompleted, dueDate, title, content}) {
    const completed = isCompleted ? styles.todoCompleted : styles.todo;
    return (
        <div className={`${completed}`}>
            <div className={styles.grid}>
                <div className={styles.todoMark}>
                    <CompleteItemButton status={isCompleted}/>
                </div>
                <div className={styles.todoControls}>
                    <EditItemButton/>
                    <DeleteItemButton/>
                </div>
            </div>
            <span className={styles.todoDueDate}>{dueDate}</span>
            <h1 className={styles.todoTitle}>{title}</h1>
            <p className={styles.todoContent}>{content}</p>
        </div>
  )
}