import styles from './page.module.css';
import {MdDone} from "react-icons/md";
export function CompleteItemButton({status}) {
    const checked = status ? styles.complete : styles.incomplete;
    return (
        <div>
            <button className={`${checked}`}><p>{<MdDone/>}</p></button>
        </div>
    );
}