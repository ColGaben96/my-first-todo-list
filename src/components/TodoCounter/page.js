import styles from './page.module.css';
export function TodoCounter() {
    return (
        <div className={styles.counter}>
            <h2>Has completado 2 de 3 TODOs</h2>
        </div>
    );
}