import React from 'react';

import CardsPlayListComponent from './CardsPlayList';
import useStyles from './styles';

const BodyMainScreen = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
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
