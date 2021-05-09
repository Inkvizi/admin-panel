import styles from './FilterSum.module.css';
import {Input} from '../Input/Input';

export function FilterSum(props) {
    return (
        <div className={styles._}>
            <Input id="filterSumFrom" caption={props.caption} placeholder="&#8381;" captionInside="от"></Input>
            <div className="delimiter">&nbsp;</div>
            <Input id="filterSumTo" placeholder="&#8381;" captionInside="до"></Input>
        </div>
    );
}