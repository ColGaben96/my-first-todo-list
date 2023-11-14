import styles from './page.module.css';
export function TodoCounter({total, completed}) {
    const answer = () => {
        if (total === 0) {
            return "No hay TODOS";
        } else if (total === completed) {
            return "Has completado todos los TODOS";
        } else {
            return `Has completado ${completed} de ${total} TODOS`;
        }
    };
    return (
        <div className={`${total === completed && completed > 0 ? styles.counterComplete : styles.counter}`}>
            <h2>{answer()}</h2>
        </div>
    );
}