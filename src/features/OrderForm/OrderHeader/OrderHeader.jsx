import React, { useState } from 'react'
import styles from './OrderHeader.module.css'
import { CloseButton } from 'components/CloseButton/CloseButton'
import { CloseButtonMenu } from 'components/CloseButton/CloseButtonMenu'

export function OrderHeader({ caption, onClose, isNeedConfirm }) {
  const [isNeedShowCloseMenu, setIsNeedShowCloseMenu] = useState(false)
  console.log('isNeedConfirm=' + isNeedConfirm)
  const handleCloseButtonClick = (event) => {
    event.preventDefault()
    if (isNeedConfirm) {
      console.log('setIsNeedShowCloseMenu=' + true)
      setIsNeedShowCloseMenu(true)
    } else {
      console.log('onClose=' + false)
      onClose(event)
    }
  }
  const handleDiscardChangesClick = (event) => {
    event.preventDefault()
    setIsNeedShowCloseMenu(false)
    onClose(event)
  }
  const handleCancelClick = (event) => {
    event.preventDefault()
    setIsNeedShowCloseMenu(false)
  }
  return (
    <div className={styles._}>
      <div className={styles.headerText}>Заявка #{caption}</div>
      <div className={styles.menu}>
        <CloseButton onClick={handleCloseButtonClick} />
        <CloseButtonMenu
          isShow={isNeedShowCloseMenu}
          onDiscardChangesClick={handleDiscardChangesClick}
          onCancelClick={handleCancelClick}
        />
      </div>
    </div>
  )
}
