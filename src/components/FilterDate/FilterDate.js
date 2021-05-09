import styles from './FilterDate.module.css';
import {Input} from '../Input/Input';

export function FilterDate(props) {
    return (
        <div className={styles._}>
            <Input id="filterDateFrom" caption={props.caption} placeholder="dd.mm.yyyy" captionInside="c"></Input>
            <div className="delimiter">&nbsp;</div>
            <Input id="filterDateTo" placeholder="dd.mm.yyyy" captionInside="по"></Input>
        </div>
    );
}