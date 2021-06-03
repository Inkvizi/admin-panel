import React from 'react'
import styles from './OrderForm.module.css'
import { Modal } from 'react-router-modal'
import { OrderHeader } from './OrderHeader/OrderHeader'
import { OrderFooter } from './OrderFooter/OrderFooter'
import { OrderBody } from './OrderBody/OrderBody'

export function OrderForm(properties) {
  const orderNumber = properties.match.params.number
  return (
    <Modal className={styles._}>
      <OrderHeader orderNumber={orderNumber} />
      <OrderBody />
      <OrderFooter />
    </Modal>
  )
}
