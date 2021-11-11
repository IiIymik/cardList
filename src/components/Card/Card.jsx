import React from 'react';
import { Article, Category, Name, Price, Container } from './Card.styled.js';
import { ReactComponent as Dollar } from 'assets/dollar.svg'
import Button from 'components/Button/Button';

const Card = ({data}) => {
const {name,price,category} = data
  return (
    <Article>
      <Category>{category}</Category>
      <Name>{name}</Name>
      <Container>
        <Price><Dollar style={{ marginRight: "8px", marginBottom: "8px"}} />{price}</Price>
      <Button handelBtn={(e)=>{}}>BUY</Button>
      </Container>
    </Article>
  )
}

export default Card
