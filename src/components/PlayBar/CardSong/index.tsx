import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';

import Icon from '../../atoms/icon/index';
import FavoriteIcon from '../../atoms/icons/Favorite';

import useStyles from './styles';

interface Props {
  imageURL: string | StaticImageData;
  altText: string;
  label: string;
  artistsName: string;
}

const CardSongComponent: FC<Props> = ({
  imageURL,
  altText,
  label,
  artistsName,
}) => {
  const { classes } = useStyles();
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        width: '561px',
        height: '56px',
      }}
    >
      <figure className={classes.card}>
        <Image src={imageURL} alt={altText} className={classes.imageCard} />
      </figure>
      <div style={{ lineHeight: 1.3 }}>
        <p className={classes.textLabel}>{label}</p>

        <a href="undefined" className={classes.textArtist}>
          {artistsName}
        </a>
      </div>
      <Icon component={FavoriteIcon} size={20} style={{ marginLeft: '10px' }} />
    </div>
  );
};

export default CardSongComponent;
