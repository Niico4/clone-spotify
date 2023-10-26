import React from 'react';

import {
  imageHoraDeAventura,
  imageLosCien,
  imageNiico,
  imageRickAndMorty,
  imageSouthPark,
  imageUnShowMas,
} from '../../../../../public/mock/index';
import LibraryHeaderComponent from '../HeaderSidebar/index';
import PlayListComponent from '../PlayListSection';

import LibraryBodyComponent from './Body';
import useStyles from './styles';

const SidebarBody = () => {
  const { classes } = useStyles();
  return (
    <section className={classes.root}>
      <LibraryHeaderComponent />
      <div className={classes.wrapperBody}>
        <LibraryBodyComponent />

        <div className={classes.wrapperPlayList}>
          <PlayListComponent
            imageURL={imageNiico}
            altText="list Niico"
            titlePlayList="Niico"
            typeList="Lista"
            author="Niico"
          />
          <PlayListComponent
            imageURL={imageSouthPark}
            altText="list south park"
            titlePlayList="Rap"
            typeList="Lista"
            author="Niico"
          />
          <PlayListComponent
            imageURL={imageRickAndMorty}
            altText="list rick and morty"
            titlePlayList="Mezclas"
            typeList="Lista"
            author="Niico"
          />
          <PlayListComponent
            imageURL={imageHoraDeAventura}
            altText="list hora de aventura"
            titlePlayList="Hip Hop"
            typeList="Álbum"
            author="Tupac Shakur"
          />
          <PlayListComponent
            imageURL={imageUnShowMas}
            altText="list un show mas"
            titlePlayList="Reggae"
            typeList="Lista"
            author="Niico"
          />
          <PlayListComponent
            imageURL={imageLosCien}
            altText="list los 100"
            titlePlayList="Canciones que te gustan"
            typeList="Lista"
            author="Niico"
          />
        </div>
      </div>
    </section>
  );
};

export default SidebarBody;
