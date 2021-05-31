import React from 'react'
import styles from './TableFooter.module.css'
import { ChangeStatusButton } from '../../ChangeStatusButton/ChangeStatusButton'
import { DeleteButton } from '../../DeleteButton/DeleteButton'
import { Pagination } from '../../Pagination/Pagination'

export function TableFooter({ onPageChanged, totalRecords }) {
  return (
    <tfoot className={styles._}>
      <tr>
        <td colSpan="7">
          <div className={styles.footer}>
            <div className={styles.selectedCount}>Выбрано записей: 0</div>
            <ChangeStatusButton />
            <DeleteButton />
            <Pagination
              totalRecords={totalRecords}
              onPageChanged={onPageChanged}
              pageLimit={9}
              pageNeighbours={2}
            />
          </div>
        </td>
      </tr>
    </tfoot>
  )
}
