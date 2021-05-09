import styles from './FilterSelect.module.css';
import {useState, useRef} from 'react';
import {CheckBox} from '../CheckBox/CheckBox'

export function FilterSelect(props) {
   const [expanded, setExpanded] = useState(false);
   const checkBoxesRef = useRef(null);

    const showCheckboxes = (event) => {
        if (!expanded) {
            checkBoxesRef.current.style.display = "flex";
            setExpanded(true);
        } else {
            checkBoxesRef.current.style.display = "none";
            setExpanded(false);
        }
    }

    const optionsForSelect = props.values.map(value => 
        <CheckBox id={value} value={value}/>
    );
    
    return (
        <div className={styles._}>
            <label className={styles.caption}>{props.caption}</label>
            <div className={styles.selectBox} onClick={showCheckboxes}>
                <select className={styles.select}>
                    <option>{props.defaultValue}</option>
                </select>
                <div className={styles.overSelect}></div>
            </div>
            <div id={styles.checkboxes} ref={checkBoxesRef}>
                {optionsForSelect}
            </div>
        </div>
    );
}

