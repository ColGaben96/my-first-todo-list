import styles from './page.module.css';
import {MdAdd} from "react-icons/md";

export function CreateItemButton() {
    return (
        <div>
            <button className={styles.create}><p><MdAdd/> Crear TODO</p></button>
        </div>
    );
}