import styles from './page.module.css';
import {MdDelete} from "react-icons/md";

export function DeleteItemButton() {
    return (
        <div>
            <button className={styles.delete}><p><MdDelete/></p></button>
        </div>
    );
}