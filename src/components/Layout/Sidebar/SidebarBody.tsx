import React from 'react';

import {
  imageHoraDeAventura,
  imageLosCien,
  imageNiico,
  imageRickAndMorty,
  imageSouthPark,
  imageUnShowMas,
} from '../../../../public/mock/index';
import LibraryBodyComponent from './Library/Body';
import LibraryHeaderComponent from './Library/Header';
import SidebarPlayList from './Library/PlayListSection';
import styles from './styles/Sidebar.module.css';
import styled from './styles/style';

const SidebarBody = () => {
  return (
    <styled.ContainerLibrary>
      <LibraryHeaderComponent />
      <styled.WrapperBody>
        <LibraryBodyComponent />

        <div className={styles.wrapperPlayList}>
          <SidebarPlayList
            imageURL={imageNiico}
            altText="list Niico"
            titlePlayList="Niico"
            typeList="Lista"
            author="Niico"
          />
          <SidebarPlayList
            imageURL={imageSouthPark}
            altText="list south park"
            titlePlayList="Rap"
            typeList="Lista"
            author="Niico"
          />
          <SidebarPlayList
            imageURL={imageRickAndMorty}
            altText="list rick and morty"
            titlePlayList="Mezclas"
            typeList="Lista"
            author="Niico"
          />
          <SidebarPlayList
            imageURL={imageHoraDeAventura}
            altText="list hora de aventura"
            titlePlayList="Hip Hop"
            typeList="Álbum"
            author="Tupac Shakur"
          />
          <SidebarPlayList
            imageURL={imageUnShowMas}
            altText="list un show mas"
            titlePlayList="Reggae"
            typeList="Lista"
            author="Niico"
          />
          <SidebarPlayList
            imageURL={imageLosCien}
            altText="list los 100"
            titlePlayList="Canciones que te gustan"
            typeList="Lista"
            author="Niico"
          />
        </div>
      </styled.WrapperBody>
    </styled.ContainerLibrary>
  );
};

export default SidebarBody;
