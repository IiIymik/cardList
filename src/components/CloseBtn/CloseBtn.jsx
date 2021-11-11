import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Btn } from './CloseBtn.style.js'
const StyleCross = {
  width:"20px",
  height: "20px",
}
export const CloseBtn = ({onClick}) => {
  return (
    <Btn onClick={onClick}>
      <AiOutlineClose style={StyleCross}/>
    </Btn>
  )
}
