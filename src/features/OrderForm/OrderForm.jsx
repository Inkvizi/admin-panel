import React, { useEffect, useState } from 'react'
import styles from './OrderForm.module.css'
import { useHistory, useParams } from 'react-router'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import cx from 'classnames'
import { unwrapResult } from '@reduxjs/toolkit'
import { useForm, FormProvider } from 'react-hook-form'
import { OrderHeader } from './OrderHeader/OrderHeader'
import { OrderFooter } from './OrderFooter/OrderFooter'
import { OrderBody } from './OrderBody/OrderBody'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrderByID, updateOrder } from './orderSlice'

export function OrderForm({ isModal, match }) {
  const { number } = useParams()
  const dispatch = useDispatch()
  const [isChanged, setIsChanged] = useState(false)
  const [targetElement, setTargetElement] = useState({})
  const order = useSelector((state) => state.order.entity)
  const [orderForModify, setOrderForModify] = useState({})
  const [isOrderLoaded, setIsOrderLoaded] = useState(false)
  const methods = useForm()

  useEffect(() => {
    setTargetElement(modalReference.current)
    dispatch(fetchOrderByID(Number(number)))
      .then(unwrapResult)
      .catch((rejectedValueOrSerializedError) =>
        console.log('inner catch', rejectedValueOrSerializedError)
      )
  }, [])

  const modalReference = React.createRef()
  const history = useHistory()
  useEffect(() => {
    if (targetElement && isModal) {
      disableBodyScroll(targetElement)
      return () => enableBodyScroll(targetElement)
    }
  }, [targetElement, isModal])
  useEffect(() => {
    if (Object.keys(order).length > 0) {
      setOrderForModify({
        customerName: order.customerName,
        status: order.status,
        acceptCode: order.acceptCode,
      })
      setIsOrderLoaded(true)
    }
  }, [order])

  const onSubmit = async (data) => {
    const orderForUpdate = { ...order }
    orderForUpdate.customerName = orderForModify.customerName
    orderForUpdate.status = orderForModify.status
    orderForUpdate.acceptCode = orderForModify.acceptCode
    await dispatch(updateOrder(orderForUpdate))
      .then(unwrapResult)
      .catch((rejectedValueOrSerializedError) =>
        console.log('inner catch', rejectedValueOrSerializedError)
      )
    console.log(methods.watch('customerName'))
    history.push(`/orders/`, { needRefresh: true })
  }

  const handleClose = (event) => {
    event.preventDefault()
    history.push(`/orders/`, { needRefresh: false })
    return false
  }
  const handleChange = ({ target: { name, value } }) => {
    if (!isChanged) {
      setIsChanged(true)
    }
    methods.setValue(name, value)
    orderForModify[name] = value
    setOrderForModify({ ...orderForModify })
  }

  return (
    <FormProvider {...methods}>
      <form
        className={cx(styles._, { [styles.modal_wrapper]: isModal })}
        onSubmit={methods.handleSubmit(onSubmit)}
        ref={modalReference}>
        <div className={styles._}>
          <OrderHeader
            caption={number}
            onClose={handleClose}
            isNeedConfirm={isChanged}
          />
          <OrderBody
            onChange={handleChange}
            orderDataForModify={orderForModify}
            order={order}
            isOrderLoaded={isOrderLoaded}
          />
          <OrderFooter />
        </div>
      </form>
    </FormProvider>
  )
}
