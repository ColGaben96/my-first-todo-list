import styles from './page.module.css';
import {CompleteItemButton} from "@/components/ui/CompleteItem/page";
import {EditItemButton} from "@/components/ui/EditItem/page";
import {DeleteItemButton} from "@/components/ui/DeleteItem/page";
import {MdOutlineCalendarMonth} from "react-icons/md";
import {SaveItemButton} from "@/components/ui/SaveItem/page";
import {useState} from "react";
export function TodoItem({isCompleted, isEditable, dueDate, setDueDate, title, setTitle, content, setContent, onComplete, onEdit, onDelete, onSave}) {
    const completed = isCompleted ? styles.todoCompleted : styles.todo;
    const editable = isEditable ? styles.todoEditable : styles.todo;
    const [todoTitle, setTodoTitle] = useState(title);
    const [todoContent, setTodoContent] = useState(content);
    const [todoDueDate, setTodoDueDate] = useState(dueDate);
    const handleTitleChange = (event) => {
        setTodoTitle(event.target.value);
        setTitle(event.target.value);
        setTitle(title);
    }
    const handleContentChange = (event) => {
        setTodoContent(event.target.value);
        setContent(event.target.value);
        content = todoContent;
    }
    const handleDueDateChange = (event) => {
        setTodoDueDate(event.target.value);
        setDueDate(event.target.value);
        dueDate = todoDueDate;
    }
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
    }
    else if (isEditable) {
        return (
            <div className={`${editable}`}>
                <div className={styles.grid2col}>
                    <input
                        className={styles.todoTitleEditable}
                        type={"text"}
                        value={todoTitle}
                        onChange={handleTitleChange}/>
                    <div className={styles.todoControls}>
                        <SaveItemButton
                            onSave={onSave}/>
                        <DeleteItemButton
                            onDelete={onDelete}/>
                    </div>
                </div>
                <div className={styles.grid2col}>
                    <input className={styles.todoContentEditable}
                           type={"text"}
                           value={todoContent}
                            onChange={handleContentChange}/>
                    <input className={styles.todoDueDateEditable}
                           type={"date"}
                           value={todoDueDate}
                            onChange={handleDueDateChange}/>
                </div>
            </div>
        );
    }
    else {
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