import React from 'react'
import styles from './Table.module.css'
import { CheckBox } from '../CheckBox/CheckBox'
import { ChangeStatusButton } from '../ChangeStatusButton/ChangeStatusButton'
import { DeleteButton } from '../DeleteButton/DeleteButton'
import { CANCELED } from '../../const/status'

export function Table ({ headerData, data }) {
  const captions = [<th key="Выбор" className={styles.th}><CheckBox/></th>, ...headerData.map(caption =>
        <th key={caption} className={styles.th}>{caption}</th>
  )]
  const tableData = data.map(order =>
        <tr key={order.ID} className={styles.tr}>
            <td key={order.ID + '_checkBox'} className={styles.tdCheckBox}><CheckBox/></td>
            <td key={order.ID + '_ID'} className={styles.td}>{order.ID}</td>
            <td key={order.ID + '_date'} className={styles.td}>{order.date}</td>
            <td key={order.ID + '_status'} className={styles.td}>{order.status}</td>
            <td key={order.ID + '_itemsCount'} className={styles.td}>{(order.status === CANCELED) ? '\u2014' : order.itemsCount}</td>
            <td key={order.ID + '_sum'} className={styles.td}>{(order.status === CANCELED) ? '\u2014' : Number(order.sum).toLocaleString('ru') + ' \u20BD'} </td>
            <td key={order.ID + '_customerName'} className={styles.td}>{order.customerName}</td>
        </tr>
  )
  return (
        <div className={styles._}>
            <table className={styles.table}>
                <tfoot className={styles.thead}>
                    <tr>
                        <td colSpan="7">
                            <div className={styles.footer}>
                                <label className={styles.labelCount}>Выбрано записей: 0</label>
                                <ChangeStatusButton/>
                                <DeleteButton/>
                            </div>
                        </td>
                    </tr>
                </tfoot>
                <thead>
                    <tr>
                        {captions}
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table>
        </div>
  )
}
