// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

const OnChangeExm = () => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [comment, setComment] = useState('')
  const [Payment, setPayment] = useState('')
  const [Shipping, setShipping] = useState('Delivery')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value)
  }

  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }

  const handlePaymentChange = (e) => {
    setPayment(e.target.value)
  }
  const handleShippingChange = (e) => {
    setShipping(e.target.value)
  }

  return (
    <div>
      <input type='text' value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input type='number' value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>

      <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions' />
      <p>Comment: {comment}</p>

      <select value={Payment} onChange={handlePaymentChange}>
        <option value=''>Select Payment Method</option>
        <option value='Visa'>Visa</option>
        <option value='MasterCard'>MasterCard</option>
        <option value='GiftCard'>GiftCard</option>
      </select>
      <p>Payment:{Payment}</p>

      <label htmlFor='pick'>
        <input
          type='radio'
          name='shipping'
          id='pick'
          value='Pick Up'
          checked={Shipping === 'Pick Up'}
          onChange={handleShippingChange}
        />{' '}
        Pick up
      </label>
      <label htmlFor='delivery'>
        <input
          type='radio'
          name='shipping'
          id='delivery'
          value='Delivery'
          checked={Shipping === 'Delivery'}
          onChange={handleShippingChange}
        />{' '}
        Delivery
      </label>

      <p>Shipping:{Shipping}</p>
    </div>
  )
}

export default OnChangeExm
