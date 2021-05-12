import React from 'react'
import styles from './Table.module.css'
import { CheckBox } from '../CheckBox/CheckBox'
import { ChangeStatusButton } from '../ChangeStatusButton/ChangeStatusButton'
import { DeleteButton } from '../DeleteButton/DeleteButton'
import { CANCELED } from '../../const/status'

export function Table({ headerData, data }) {
  const captions = [
    <th key="Выбор" className={styles.th}>
      <CheckBox />
    </th>,
    ...headerData.map((caption) => (
      <th key={caption} className={styles.th}>
        {caption}
      </th>
    )),
  ]
  const tableData = data.map((order) => (
    <tr key={order.ID} className={styles.tr}>
      <td className={styles.tdCheckBox}>
        <CheckBox />
      </td>
      <td className={styles.td}>{order.ID}</td>
      <td className={styles.td}>{order.date}</td>
      <td className={styles.td}>{order.status}</td>
      <td className={styles.td}>
        {order.status === CANCELED ? '\u2014' : order.itemsCount}
      </td>
      <td className={styles.td}>
        {order.status === CANCELED
          ? '\u2014'
          : Number(order.sum).toLocaleString('ru') + ' \u20BD'}{' '}
      </td>
      <td className={styles.td}>{order.customerName}</td>
    </tr>
  ))
  return (
    <div className={styles._}>
      <table className={styles.table}>
        <tfoot className={styles.tfoot}>
          <tr>
            <td colSpan="7">
              <div className={styles.footer}>
                <div className={styles.selectedCount}>Выбрано записей: 0</div>
                <ChangeStatusButton />
                <DeleteButton />
              </div>
            </td>
          </tr>
        </tfoot>
        <thead>
          <tr>{captions}</tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </div>
  )
}
