import React from 'react';
import { Container, Text, Title, Price, FormContainer, ContainerData } from './ModalCard.styled.js';
import { ReactComponent as Dollar } from 'assets/dollar.svg'
import Form from 'components/Form/Form';
export const ModalCard = ({data}) => {
  return (
    <Container>
      <ContainerData>
        <Text>{data.category}</Text>
        <Title>{data.name}</Title>
        <Price><Dollar style={{ marginRight: "4px", marginBottom: "8px"}} />{data.price}</Price>
      </ContainerData>
      <FormContainer>
        <Form/>
      </FormContainer>
    </Container>
  )
}
