import styles from './page.module.css';
import {MdEdit} from "react-icons/md";

export function EditItemButton() {
    return (
        <div>
            <button className={styles.edit}><p><MdEdit/></p></button>
        </div>
    );
}