import styles from './FilterShowButton.module.css';

export function FilterShowButton() {
    return (
        <div className={styles._}>
            <bytton className={styles.button} type="button">Фильтры</bytton>
        </div>
    );
}