import React from 'react';
import { Btn } from './Button.styled';

const Button = ({ children,handelBtn, typeBtn = "button", colorBg = '#ffffff', colorTx = '#4BCFA0' }) => {
  return (
    <Btn onClick={(e)=>handelBtn(e)} type={typeBtn} style={{backgroundColor: `${colorBg}`, color: `${colorTx}`}}>{children}</Btn>
  )
}

export default Button
