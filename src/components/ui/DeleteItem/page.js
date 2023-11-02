import styles from './page.module.css';
import {MdDelete} from "react-icons/md";

export function DeleteItemButton({onDelete}) {
    return (
        <div>
            <button className={styles.delete} onClick={onDelete}><p><MdDelete/></p></button>
        </div>
    );
}