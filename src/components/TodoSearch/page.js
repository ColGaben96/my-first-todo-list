import styles from './page.module.css';
import {CreateItemButton} from "@/components/ui/CreateItem/page";
export function TodoSearch({searchValue, setSearchValue}) {
    return (
        <div>
            <input
                className={styles.search}
                placeholder={"Buscar"}
                value={searchValue}
                onChange={(event) =>
                setSearchValue(event.target.value)}/>
        </div>
    );
}