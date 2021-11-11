import React from 'react';
import GalleryCards from 'components/GalleryCards/GalleryCards';
import { CardList } from './CardGallery.styled';


const CardGallery = ({ data, onClick }) => {
  const clickOnCardBtn = (e) => {
    if (e.target.nodeName === 'BUTTON') return onClick(e.target.parentElement.parentElement.parentElement.id)
  }

  return (
    <CardList onClick={clickOnCardBtn}>
      <GalleryCards data={data}/>
    </CardList>
  )
}

export default CardGallery
