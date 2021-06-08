import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './Theme.module.css'
import { ThemeMenu } from './ThemeMenu'
import { changeTheme } from '../../features/Orders/ordersViewSlice'
import { lightTheme, darkTheme } from '../../const/themes'

export function Theme() {
  const [changeThemeClicked, setChangeThemeClicked] = useState(false)
  const dispatch = useDispatch()

  const handleThemeClick = () => {
    setChangeThemeClicked(!changeThemeClicked)
  }

  const onThemeMenuSelect = (value) => {
    setChangeThemeClicked(false)
    if (value) {
      dispatch(changeTheme(lightTheme))
    } else {
      dispatch(changeTheme(darkTheme))
    }
  }

  return (
    <div className={styles._}>
      <div className={styles.theme} onClick={handleThemeClick}>
        <div className={styles.icon}></div>
        <div className={styles.label}>Светлая тема</div>
      </div>
      <ThemeMenu
        isShow={changeThemeClicked}
        onMenuItemSelect={onThemeMenuSelect}
      />
    </div>
  )
}
