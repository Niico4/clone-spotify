import { Card } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import React, { FC, useState } from 'react';

import imagenPlayCircle from '../../../../public/mock/playButton.png';

import useStyles from './styles';

interface Props {
  imageURL: string | StaticImageData;
  altText: string;
  label: string;
  artistsName: string;
}

const MyCardPlayList: FC<Props> = ({
  imageURL,
  altText,
  label,
  artistsName,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { classes } = useStyles();
  return (
    <Card
      className={classes.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          position: 'relative',
        }}
      >
        {isHovered && (
          <Image
            src={imagenPlayCircle}
            alt="play button"
            className={classes.imagePlayCircle}
          />
        )}
        <Image src={imageURL} alt={altText} className={classes.imageCard} />
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

export default MyCardPlayList;
