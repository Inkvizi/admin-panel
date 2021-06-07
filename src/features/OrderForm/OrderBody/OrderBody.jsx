import React from 'react'
import styles from './OrderBody.module.css'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../../components/Input/Input'
import { statuses } from '../../../const/FilterStatusValues.js'
import { FilterSelect } from '../../../components/FilterSelect/FilterSelect'
const Rub = '\u20BD'

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
  const onChangeFilterStatus = ({ target: { checked, name } }) => {
    if (checked) {
      onChange({ target: { name: 'status', value: name } })
    } else {
      onChange({ target: { name: 'status', value: order.status } })
    }
  }
  return isOrderLoaded ? (
    <div className={styles._}>
      <Input
        id="date"
        caption="Дата и время заказа"
        value={order.date}
        className={styles.block}
        isLocked={true}
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
      <table className={styles.table}>
        <tfoot className={styles.tfoot}>
          <tr>
            <td colSpan="3">
              <div className={styles.footer}>
                Итоговая сумма: {Number(order.sum).toLocaleString('ru')} {Rub}
              </div>
            </td>
          </tr>
        </tfoot>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Артикул</th>
            <th className={styles.th}>Наименование</th>
            <th className={styles.th}>Цена</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item) => {
            return (
              <tr key={item.ID} className={styles.tr}>
                <td>{item.vendorCode}</td>
                <td>{item.name}</td>
                <td>
                  {Number(item.price).toLocaleString('ru')} {Rub}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <FilterSelect
        className={styles.block}
        caption="Статус заказа"
        defaultValue={order.status}
        values={statuses}
        onChangeFilter={onChangeFilterStatus}
        selectedValue={orderDataForModify.status}
        {...register('status')}
      />
      <Input
        id="loyalty"
        caption="Уровень лояльности"
        value={order.loyalty}
        className={styles.block}
        isLocked={true}
      />
      <Input
        id="acceptCode"
        caption="Код подтверждения"
        value={orderDataForModify.acceptCode}
        hasError={!!errors.acceptCode}
        className={styles.block}
        {...register('acceptCode', {
          required: true,
          maxLength: 4,
          minLength: 4,
          pattern: /\d{4}/,
        })}
        onChange={onChange}
      />
      {errors.acceptCode && (
        <span className={styles.error}>
          Код подтверждения должен состоять из 4 цифр
        </span>
      )}
    </div>
  ) : (
    <div className={styles._loading}>Загрузка</div>
  )
}
