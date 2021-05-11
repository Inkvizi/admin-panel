import styles from './FilterSum.module.css';
import {Input} from '../Input/Input';

export function FilterSum({caption}) {
    return (
        <div className={styles._}>
            <Input id="filterSumFrom" caption={caption} placeholder="&#8381;" captionInside="от"></Input>
            <div className="delimiter">&nbsp;</div>
            <Input id="filterSumTo" placeholder="&#8381;" captionInside="до"></Input>
        </div>
    );
}