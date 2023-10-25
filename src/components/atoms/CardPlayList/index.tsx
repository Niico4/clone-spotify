import { Card } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import React, { FC, useState } from 'react';

import imagenPlayCircle from '../../../../public/mock/playButton.png';
import styles from './Card.module.css';

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
  return (
    <Card
      className={styles.card}
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
            className={styles.imagePlayCircle}
          />
        )}
        <Image src={imageURL} alt={altText} className={styles.image} />
      </div>
      <div style={{ lineHeight: 1.3 }}>
        <p className={styles.textLabel}>{label}</p>

        <a href="undefined" className={styles.textArtist}>
          {artistsName}
        </a>
      </div>
    </Card>
  );
};

export default MyCardPlayList;
