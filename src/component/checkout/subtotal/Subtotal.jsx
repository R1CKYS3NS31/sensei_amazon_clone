import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './subtotal.css'

export const Subtotal = () => {
  return (
    <div className="subtotal">
        <CurrencyFormat
        renderText={(value)=>{
            <>
            <p>Subtotal ({basket.length} items)</p></>
        }}/>
    </div>
  )
}
