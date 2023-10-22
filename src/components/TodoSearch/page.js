import styles from './page.module.css';
import {CreateItemButton} from "@/components/ui/CreateItem/page";
export function TodoSearch() {
    return (
        <div>
            <input
                className={styles.search}
                placeholder={"Buscar"}/>
        </div>
    );
}