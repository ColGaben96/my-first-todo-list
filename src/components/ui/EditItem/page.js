import styles from './page.module.css';
import {MdEdit} from "react-icons/md";

export function EditItemButton({onEdit}) {
    return (
        <div>
            <button className={styles.edit} onClick={onEdit}><p><MdEdit/></p></button>
        </div>
    );
}