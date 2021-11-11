import { useState, useEffect } from 'react';
import { reqStatus } from 'constants/index';
import { fetchData } from 'services/api';
import { Container } from './App.styled.js'
import CardGallery from 'components/CardGallery/CardGallery';
import { Modal } from 'components/Modal/Modal';
import { ModalCard } from 'components/ModalCard/ModalCard';
import Button  from 'components/Button/Button';
// import SpinLoader from 'components/SpinLoader/SpinLoader.jsx';

function App() {
  const [data, setData] = useState(null);
  const [currentCard, setCurrentCard] = useState(null)
  const [status, setStatus] = useState(reqStatus.IDLE);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (data) return;
    setStatus(reqStatus.PENDING)

    fetchData().then(res => {
      setData(res);

      setStatus(reqStatus.RESOLVED);
    }).catch((error) => {
      console.log(error);
      setStatus(reqStatus.REJECTED);

    });
  }, [data]);

  const handleOnCard = (target) => {
    setCurrentCard(data[target]);
    toggleShowModal();
  };

  const handleCheapestBtn = (e) => {
    const cheapest = data.sort((a, b) => a.price - b.price);
    setCurrentCard(cheapest[0]);
    toggleShowModal();
  }

  const toggleShowModal = () => setShowModal(!showModal);
  return (
    <Container>
      <CardGallery data={data} onClick={handleOnCard} />
      <Button colorBg="#4BCFA0" colorTx='#ffffff' handelBtn={handleCheapestBtn}>Buy cheapest</Button>
      {showModal && <Modal onClose={toggleShowModal}><ModalCard data={currentCard}/></Modal>}
    </Container>
  )
}

export default App;
