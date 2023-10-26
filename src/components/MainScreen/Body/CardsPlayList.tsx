import React, { FC } from 'react';

import {
  imageHoraDeAventura,
  imageLosCien,
  imageNiico,
  imageRickAndMorty,
  imageSouthPark,
  imageUnShowMas,
} from '../../../../public/mock/index';
import MyCardPlayList from '../../atoms/CardPlayList';

import useStyles from './styles';

interface Props {
  title: string;
}

const CardsPlayListComponent: FC<Props> = ({ title }) => {
  const { classes } = useStyles();
  return (
    <div style={{ marginBottom: '30px' }}>
      <div className={classes.wrapperTitles}>
        <h2 className={classes.subTitle}>
          <a href="undefined">{title}</a>
        </h2>
        <p className={classes.ancle}>
          <a href="undefined">Mostrar todos</a>
        </p>
      </div>
      <div className={classes.wrapperCardsPlayList}>
        <MyCardPlayList
          imageURL={imageSouthPark}
          altText="south park"
          label="Mix reggaeton"
          artistsName="Ryan Castro, Nicky Jam, Feid y más"
        />

        <MyCardPlayList
          imageURL={imageHoraDeAventura}
          altText="hora de aventura"
          label="Mix Hip Hop"
          artistsName="Afaz Natural, Nanpa Básico, Mañas Ru-Fino"
        />

        <MyCardPlayList
          imageURL={imageLosCien}
          altText="south park"
          label="Mix de grupero"
          artistsName="Marco Antonio Solís, Grupo Miramar, Los Tigres del Norte"
        />

        <MyCardPlayList
          imageURL={imageNiico}
          altText="south park"
          label="Mix de Anthony Zambrano"
          artistsName="Uriel Henao, El Gato Negro y Danny Moreno"
        />

        <MyCardPlayList
          imageURL={imageRickAndMorty}
          altText="south park"
          label="Mix de Julio Jaramillo"
          artistsName="Darío Gómez, Rolando Laserie y Los Tecolines"
        />

        <MyCardPlayList
          imageURL={imageUnShowMas}
          altText="south park"
          label="Mix de la década ..."
          artistsName="Ñengo Flow, Anthony Zambrano, Arelys Henao"
        />

        <MyCardPlayList
          imageURL={imageSouthPark}
          altText="south park"
          label="Mix de los 90"
          artistsName="Los Tigres del Norte, Diomedes Días, Rafael Orozco"
        />
      </div>
    </div>
  );
};

export default CardsPlayListComponent;
