import styles from './page.module.css';
import {CompleteItemButton} from "@/components/ui/CompleteItem/page";
import {EditItemButton} from "@/components/ui/EditItem/page";
import {DeleteItemButton} from "@/components/ui/DeleteItem/page";
import {MdOutlineCalendarMonth} from "react-icons/md";
import {SaveItemButton} from "@/components/ui/SaveItem/page";
export function TodoItem({isCompleted, isEditable, dueDate, title, content, onComplete, onEdit, onDelete, onSave}) {
    const completed = isCompleted ? styles.todoCompleted : styles.todo;
    const editable = isEditable ? styles.todoEditable : styles.todo;
    if (isCompleted) {
        return (
            <div className={`${completed}`}>
                <div className={styles.grid3col}>
                    <div className={styles.todoMark}>
                        <CompleteItemButton
                            status={isCompleted}
                            onComplete={onComplete}/>
                    </div>
                    <h1 className={styles.todoTitle}>{title}</h1>
                    <div className={styles.todoControls}>
                        <DeleteItemButton
                            onDelete={onDelete}/>
                    </div>
                </div>
                <div className={styles.grid2col}>
                    <p className={styles.todoContent}>{content}</p>
                    <span className={styles.todoDueDate}><MdOutlineCalendarMonth/>{dueDate}</span>
                </div>
            </div>
        );
    } else if (isEditable) {
        return (
            <div className={`${editable}`}>
                <div className={styles.grid3col}>
                    <div className={styles.todoMark}>
                        <CompleteItemButton
                            status={isCompleted}
                            onComplete={onComplete}/>
                    </div>
                    <input
                        className={styles.todoTitle}
                        value={title}/>
                    <div className={styles.todoControls}>
                        <SaveItemButton
                            onSave={onSave}/>
                        <DeleteItemButton
                            onDelete={onDelete}/>
                    </div>
                </div>
                <div className={styles.grid2col}>
                    <input className={styles.todoContent}
                            value={content}/>
                    <input className={styles.todoDueDate}
                        value={dueDate}/>
                </div>
            </div>
        );
    } else {
        return (
            <div className={`${completed}`}>
                <div className={styles.grid3col}>
                    <div className={styles.todoMark}>
                        <CompleteItemButton
                            status={isCompleted}
                            onComplete={onComplete}/>
                    </div>
                    <h1 className={styles.todoTitle}>{title}</h1>
                    <div className={styles.todoControls}>
                        <EditItemButton
                            onEdit={onEdit}/>
                        <DeleteItemButton
                            onDelete={onDelete}/>
                    </div>
                </div>
                <div className={styles.grid2col}>
                    <p className={styles.todoContent}>{content}</p>
                    <span className={styles.todoDueDate}><MdOutlineCalendarMonth/>{dueDate}</span>
                </div>
            </div>
        );
    }
}