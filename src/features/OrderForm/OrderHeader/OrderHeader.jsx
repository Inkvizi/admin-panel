import React, { useState } from 'react'
import styles from './OrderHeader.module.css'
import { CloseButton } from '../../../components/CloseButton/CloseButton'
import { CloseButtonMenu } from '../../../components/CloseButton/CloseButtonMenu'

export function OrderHeader({ caption, onClose, isNeedConfirm }) {
  const [isNeedShowCloseMenu, setIsNeedShowCloseMenu] = useState(false)
  const handleCloseButtonClick = (event) => {
    if (isNeedConfirm) {
      setIsNeedShowCloseMenu(true)
    } else {
      onClose(event)
    }
  }
  const handleCloseMenuSelect = (event, value) => {
    setIsNeedShowCloseMenu(false)
    if (value) {
      onClose(event)
    }
  }
  return (
    <div className={styles._}>
      <div className={styles.headerText}>Заявка #{caption}</div>
      <div className={styles.menu}>
        <CloseButton onClick={handleCloseButtonClick} />
        <CloseButtonMenu
          isShow={isNeedShowCloseMenu}
          onMenuItemSelect={handleCloseMenuSelect}
        />
      </div>
    </div>
  )
}
