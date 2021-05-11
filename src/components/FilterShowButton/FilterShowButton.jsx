import styles from './FilterShowButton.module.css';

export function FilterShowButton(props) {
    return (
        <div className={styles._}>
            <button className={styles.button} type="button">Фильтры</button>
        </div>
    );
}