import styles from './Input.module.css';

export function Input (props) {
    return (
        <div class={styles._}>
            <label class={styles.label} for="inputValue">{props.caption}</label>
            <input type="text" class={styles.input} id="inputValue" placeholder={props.placeholder}/>
            <label class={styles.labelInside} for="inputValue">{props.captionInside}</label>
        </div>
    );
}