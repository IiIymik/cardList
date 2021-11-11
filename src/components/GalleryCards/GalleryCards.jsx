import React from 'react'
import { ItemList } from './GalleryCards.styled.js';
import Card from 'components/Card/Card';

const GalleryCards = ({data}) => {
  return (
    (data && data.map((el, index) => (
     <ItemList key={index} id={index}>
        <Card data={el}/>
      </ItemList>
  ))))
}

export default GalleryCards
