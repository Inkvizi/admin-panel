import React from 'react'
import styles from './OrderBody.module.css'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../../components/Input/Input'

export function OrderBody({
  onChange,
  order,
  orderDataForModify,
  isOrderLoaded,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return isOrderLoaded ? (
    <div className={styles._}>
      <Input
        id="date"
        caption="Дата и время заказа"
        value={order.date}
        className={styles.block}
        isLocked={true}
        onChange={onChange}
      />
      <Input
        id="customerName"
        caption="ФИО Покупателя"
        value={orderDataForModify.customerName}
        hasError={!!errors.customerName}
        className={styles.block}
        {...register('customerName', { required: true })}
        onChange={onChange}
      />
      {errors.customerName && (
        <span className={styles.error}>
          ФИО покупателя обязательно для заполнения
        </span>
      )}
      {/* {errors.customerNameRequired && (
        <span>Это поля обязательно для заполнения</span>
      )} */}
    </div>
  ) : (
    <div className={styles._loading}>Загрузка</div>
  )
}
