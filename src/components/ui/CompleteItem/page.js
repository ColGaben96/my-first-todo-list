import styles from './page.module.css';
import {MdDone} from "react-icons/md";
export function CompleteItemButton({status, onComplete}) {
    const checked = status ? styles.complete : styles.incomplete;
    return (
        <div>
            <button className={`${checked}`} onClick={onComplete}><p><MdDone/></p></button>
        </div>
    );
}