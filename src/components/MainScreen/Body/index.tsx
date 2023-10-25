import React from 'react';

import styles from '../styles/MainScreen.module.css';
import CardsPlayListComponent from './CardsPlayList';

const BodyMainScreen = () => {
  return (
    <div className={styles.wrapperCardsPlayListComponents}>
      <CardsPlayListComponent title="Hecho para Niico" />
      <CardsPlayListComponent title="Tus mixes más escuchados" />
      <CardsPlayListComponent title="Escuchado recientemente" />
      <CardsPlayListComponent title="Programas para probar" />
      <CardsPlayListComponent title="Emisoras populares" />
      <CardsPlayListComponent title="En tendencia" />
    </div>
  );
};

export default BodyMainScreen;
