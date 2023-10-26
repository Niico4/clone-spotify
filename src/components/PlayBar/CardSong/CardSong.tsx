import { Card } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';

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
    <Card>
      <div
        style={{
          position: 'relative',
        }}
      >
        <Image src={imageURL} alt={altText} />
      </div>
      <div style={{ lineHeight: 1.3 }}>
        <p className={classes.textLabel}>{label}</p>

        <a href="undefined" className={classes.textArtist}>
          {artistsName}
        </a>
      </div>
    </Card>
  );
};

export default CardSongComponent;
