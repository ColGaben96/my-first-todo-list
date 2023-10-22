import styles from './page.module.css';
import {CompleteItemButton} from "@/components/ui/CompleteItem/page";
import {EditItemButton} from "@/components/ui/EditItem/page";
import {DeleteItemButton} from "@/components/ui/DeleteItem/page";
import {MdOutlineCalendarMonth} from "react-icons/md";
export function TodoItem({isCompleted, dueDate, title, content, onComplete, onEdit, onDelete}) {
    const completed = isCompleted ? styles.todoCompleted : styles.todo;
    return (
        <div className={`${completed}`}>
            <div className={styles.grid3col}>
                <div className={styles.todoMark}>
                    <CompleteItemButton
                        status={isCompleted}
                        onClick={onComplete}/>
                </div>
                <h1 className={styles.todoTitle}>{title}</h1>
                <div className={styles.todoControls}>
                    <EditItemButton
                        onClick={onEdit}/>
                    <DeleteItemButton
                        onClick={onDelete}/>
                </div>
            </div>
            <div className={styles.grid2col}>
                <p className={styles.todoContent}>{content}</p>
                <span className={styles.todoDueDate}><MdOutlineCalendarMonth/>{dueDate}</span>
            </div>
        </div>
  )
}