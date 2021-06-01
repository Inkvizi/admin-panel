import React from 'react'
import styles from './TableBody.module.css'
import { CANCELED } from '../../../const/status'
import { CheckBox } from '../../CheckBox/CheckBox'

const emDash = '\u2014'
const Rub = ' \u20BD'

export function TableBody({ data, onDoubleClick, onSelect, selectedData }) {
  const tableData = data.map((order) => {
    const onClick = () => onSelect(order)
    const onDblClick = () => onDoubleClick(order)
    return (
      <tr key={order.ID} className={styles.tr} onDoubleClick={onDblClick}>
        <td className={styles.tdCheckBox}>
          <CheckBox
            id={order.ID}
            checked={selectedData.includes(order.ID)}
            onClick={onClick}
          />
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
