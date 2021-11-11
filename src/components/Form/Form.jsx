import { useState } from 'react';
import {nanoid} from 'nanoid';
import { FormEl, Input, ErrorMessage, Button, } from './Form.styled.js';

const message = {
  nameNNum: 'Only letters allowed',
  fieldReq: 'This field in required',
  numNLater: 'Only numbers allowed',
  minLenthNum: 'Should contain 12 characters',
}
export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [messages, setMessages] = useState('')
  const [errorMassageName,setErrorMassageName] = useState(false);
  const [errorMassageNum ,setErrorMassageNum] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault()
    const obj = {
      id: nanoid(),
      name,
      number,
    };

    console.log(obj)
    reset();
  }

  const reset = () => {
    setName('');
    setNumber('');
  }



  const checkValueName = (e) => {
    const value = e.currentTarget.validity.valid
    if (value) return setErrorMassageName(false);
    if (e.currentTarget.value === '') {
      setErrorMassageName(true)
      setMessages(message.fieldReq)
      return
    }
    setErrorMassageName(true)
    setMessages(message.nameNNum)
  }

  const checkValueNumber = (e) => {
    const value = e.currentTarget.validity.valid

    if (value) return setErrorMassageNum(false);
    if (e.currentTarget.value === '') {
      setErrorMassageNum(true)
      setMessages(message.fieldReq)
      return
    }
    const checkNum = isNaN(e.currentTarget.value)
    if (checkNum) {
      setErrorMassageNum(true);
      setMessages(message.numNLater);
    }
 if (e.currentTarget.value.length < 12) {
      setErrorMassageNum(true);
      setMessages(message.minLenthNum);
    }
  }
  const clickSubmitBtn = e => {
    if (name === '' && number === '') {
      setErrorMassageName(true);
      setErrorMassageNum(true);
      setMessages(message.fieldReq);
    }
  }
  return (
    <FormEl onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={(e) => {
          setName(e.currentTarget.value)
          setErrorMassageName(false);
        }}
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        placeholder='Name'
        onBlur={checkValueName}
        required
        style={{borderColor:`${errorMassageName ? '#E43F3F' : ''}`}}
      />
      {(errorMassageName && <ErrorMessage>{messages}</ErrorMessage>)}
      <Input
        type="tel"
        name="number"
        pattern="[0-9]{12,16}"
        onChange={(e) => {
          setNumber(e.currentTarget.value)
          setErrorMassageNum(false);  
        }}
        value={number}
        placeholder='Number'
        onBlur={checkValueNumber}
        style={{borderColor:`${errorMassageNum ? '#E43F3F' : ''}`}}
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
      {(errorMassageNum && <ErrorMessage>{messages}</ErrorMessage>)}
      <Button type="submit" onClick={clickSubmitBtn}>Order</Button>
    </FormEl>
  )
}
