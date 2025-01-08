import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    const {getCartAmount,currency, delivery_fee}= useContext(ShopContext);
    console.log('delivery_fee',delivery_fee);
    console.log('getCartAmount',getCartAmount);
    
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={'CART'} text2={'TOTALS'}/>
        </div>
    <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between '>
            <p>Subtotal</p>
            <p>{getCartAmount()}.00{currency}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <p>Shipping</p>
            <p>{ delivery_fee}{currency}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
   <b>Total</b>
   <b>{getCartAmount()===0? 0: getCartAmount()+delivery_fee}{currency}.00</b>
        </div>
    </div>
    </div>
  )
}

export default CartTotal