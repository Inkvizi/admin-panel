import styles from './CheckBox.module.css';

export function CheckBox(props) {
    return (
        <div className={styles._}>
            <label className={styles.checkboxLabel} for={props.id}>
                <input type="checkbox" className={styles.checkBox} id = {props.id}/>
                {props.value}
            </label>
        </div>
    );
}