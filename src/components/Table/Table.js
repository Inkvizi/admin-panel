import styles from './Table.module.css';
import {CheckBox} from '../CheckBox/CheckBox';
import {ChangeStatusButton} from '../ChangeStatusButton/ChangeStatusButton';
import {DeleteButton} from '../DeleteButton/DeleteButton';

export function Table(props) {
    const captions = [<th className={styles.th}><CheckBox/></th>, ...props.headerData.map(caption =>
        <th className={styles.th}>{caption}</th>
    )];
    const data = props.data.map(order =>
        <tr className={styles.tr}>
            <td className={styles.tdCheckBox}><CheckBox/></td>
            <td className={styles.td}>{order.ID}</td>
            <td className={styles.td}>{order.date}</td>
            <td className={styles.td}>{order.status}</td>
            <td className={styles.td}>{(order.status === "Отменен")?'\u2014':order.itemsCount}</td>
            <td className={styles.td}>{(order.status === "Отменен")?'\u2014':Number(order.sum).toLocaleString('ru') + ' \u20BD'} </td>
            <td className={styles.td}>{order.customerName}</td>
        </tr>
    );
    return (
        <div className={styles._}>
            <table className={styles.table}>
                <tfoot className={styles.thead}>
                    <tr>
                        <td colspan="7">
                            <div className={styles.footer}> 
                                <label className={styles.labelCount}>Выбрано записей: 0</label> 
                                <ChangeStatusButton/>
                                <DeleteButton/>
                            </div> 
                        </td>
                    </tr>
                </tfoot>
                <tr>
                    {captions}
                </tr>
                {data}
            </table>
        </div>
    );    
}