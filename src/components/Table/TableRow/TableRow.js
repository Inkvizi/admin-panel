import React from 'react'
import styles from './TableRow.module.css'
import { CheckBox } from '../../CheckBox/CheckBox'
import { CANCELED } from '../../../const/status'

const emDash = '\u2014'
const Rub = ' \u20BD'

export function TableRow({ order, onDblClick, onClick, checked }) {
  return (
    <tr className={styles.tr} onDoubleClick={onDblClick}>
      <td className={styles.tdCheckBox}>
        <CheckBox id={order.ID} checked={checked} onClick={onClick} />
      </td>
      <td className={styles.td}>{order.ID}</td>
      <td className={styles.td}>{order.date}</td>
      <td className={styles.td}>{order.status}</td>
      <td className={styles.td}>
        {order.status === CANCELED ? emDash : order.itemsCount}
      </td>
      <td className={styles.td}>
        {order.status === CANCELED
          ? emDash
          : Number(order.sum).toLocaleString('ru') + Rub}{' '}
      </td>
      <td className={styles.td}>{order.customerName}</td>
    </tr>
  )
}
