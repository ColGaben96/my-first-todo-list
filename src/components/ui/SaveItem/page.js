import styles from './page.module.css';
import {MdOutlineSave} from "react-icons/md";

export function SaveItemButton({onSave}) {
    return (
        <div>
            <button className={styles.save} onClick={onSave}><p><MdOutlineSave/></p></button>
        </div>
    );
}