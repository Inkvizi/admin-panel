import React from 'react'
import styles from './TableBody.module.css'
import { CANCELED } from '../../../const/status'
import { CheckBox } from '../../CheckBox/CheckBox'

const emDash = '\u2014'
const Rub = ' \u20BD'

export function TableBody({ data, onSelect }) {
  const tableData = data.map((order) => {
    const onClick = () => onSelect(order)
    return (
      <tr key={order.ID} className={styles.tr} onClick={onClick}>
        <td className={styles.tdCheckBox}>
          <CheckBox />
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
  })
  return <tbody>{tableData}</tbody>
}
