import React, { useEffect, useState } from 'react';

import {
  imageHoraDeAventura,
  imageLosCien,
  imageNiico,
  imageRickAndMorty,
  imageSouthPark,
  imageUnShowMas,
} from '../../../../public/mock/index';

import HeaderNavBar from './Header';
import useStyles from './styles';

const NavBarSection = () => {
  const { classes } = useStyles();
  const [greetingMessage, setGreetingMessage] = useState('');

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();

    let messageGreeting = '';

    if (currentHour >= 5 && currentHour < 12) {
      messageGreeting = '¡Buenos días!';
    } else if (currentHour >= 12 && currentHour < 18) {
      messageGreeting = '¡Buenas tardes!';
    } else {
      messageGreeting = '¡Buenas noches!';
    }

    setGreetingMessage(messageGreeting);
  }, []);

  return (
    <section>
      <h1 className={classes.title}>{greetingMessage}</h1>
      <div className={classes.wrapperCards}>
        <HeaderNavBar
          imageURL={imageNiico}
          altText="list Niico"
          titlePlayList="Niico"
        />
        <HeaderNavBar
          imageURL={imageSouthPark}
          altText="list south park"
          titlePlayList="Rap"
        />
        <HeaderNavBar
          imageURL={imageRickAndMorty}
          altText="list rick and morty"
          titlePlayList="Mezclas"
        />
        <HeaderNavBar
          imageURL={imageHoraDeAventura}
          altText="list hora de aventura"
          titlePlayList="Hip Hop"
        />
        <HeaderNavBar
          imageURL={imageUnShowMas}
          altText="list un show mas"
          titlePlayList="Reggae"
        />
        <HeaderNavBar
          imageURL={imageLosCien}
          altText="list los 100"
          titlePlayList="Canciones que te gustan"
        />
      </div>
    </section>
  );
};

export default NavBarSection;
