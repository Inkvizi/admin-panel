import React, { useState } from 'react'
import styles from './TableFooter.module.css'
import { ChangeStatusButton } from '../../ChangeStatusButton/ChangeStatusButton'
import { DeleteButton } from '../../DeleteButton/DeleteButton'
import { DeleteButtonMenu } from '../../DeleteButton/DeleteButtonMenu'
import { Pagination } from '../../Pagination/Pagination'
import { ChangeStatusButtonMenu } from '../../ChangeStatusButton/ChangeStatusButtonMenu'

export function TableFooter({
  onPageChanged,
  totalRecords,
  selectedRecords,
  isNeedRefreshPage,
  onDelete,
  onChangeStatus,
}) {
  const [isDeleteButtonClicked, setIsDeleteButtonClicked] = useState(false)
  const [isChangeStatusButtonClicked, setIsChangeStatusButtonClicked] =
    useState(false)

  const onDeleteButtonClick = () => {
    setIsDeleteButtonClicked(true)
  }
  const handleDeleteClick = () => {
    setIsDeleteButtonClicked(false)
    onDelete()
  }
  const handleCancelClick = () => {
    setIsDeleteButtonClicked(false)
  }

  const onChangeStatusClick = () => {
    setIsChangeStatusButtonClicked(!isChangeStatusButtonClicked)
  }
  const onChangeStatusMenuSelect = (value) => {
    setIsChangeStatusButtonClicked(false)
    onChangeStatus(value)
  }

  return (
    <tfoot className={styles._}>
      <tr>
        <td colSpan="7">
          <div className={styles.footer}>
            <div className={styles.selectedCount}>
              Выбрано записей: {selectedRecords}
            </div>
            <div className={styles.menu}>
              <ChangeStatusButtonMenu
                isShow={isChangeStatusButtonClicked}
                onMenuItemSelect={onChangeStatusMenuSelect}
              />
              <ChangeStatusButton
                disabled={selectedRecords === 0}
                onClick={onChangeStatusClick}
              />
            </div>
            <div className={styles.menu}>
              <DeleteButtonMenu
                recordsCount={selectedRecords}
                isShow={isDeleteButtonClicked}
                onDeleteClick={handleDeleteClick}
                onCancelClick={handleCancelClick}
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
              isNeedRefreshPage={isNeedRefreshPage}
            />
          </div>
        </td>
      </tr>
    </tfoot>
  )
}
