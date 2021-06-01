import React, { useState } from 'react'
import styles from './TableFooter.module.css'
import { ChangeStatusButton } from '../../ChangeStatusButton/ChangeStatusButton'
import { DeleteButton } from '../../DeleteButton/DeleteButton'
import { DeleteButtonMenu } from '../../DeleteButton/DeleteButtonMenu'
import { Pagination } from '../../Pagination/Pagination'

export function TableFooter({
  onPageChanged,
  totalRecords,
  selectedRecords,
  onDelete,
}) {
  const [deleteClicked, setDeleteClicked] = useState(false)
  const onDeleteButtonClick = () => {
    setDeleteClicked(true)
  }
  const onDeleteMenuSelect = (value) => {
    setDeleteClicked(false)
    if (value) {
      onDelete()
    }
  }

  return (
    <tfoot className={styles._}>
      <tr>
        <td colSpan="7">
          <div className={styles.footer}>
            <div className={styles.selectedCount}>
              Выбрано записей: {selectedRecords}
            </div>
            <ChangeStatusButton />
            <div className={styles.menu}>
              <DeleteButtonMenu
                recordsCount={selectedRecords}
                isShow={deleteClicked}
                onMenuItemSelect={onDeleteMenuSelect}
              />
              <DeleteButton
                disabled={selectedRecords === 0}
                onClick={onDeleteButtonClick}
              />
            </div>
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
