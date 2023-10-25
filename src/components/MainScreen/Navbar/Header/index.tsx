import Image, { StaticImageData } from 'next/image';
import React, { FC, useState } from 'react';

import imagenPlayCircle from '../../../../../public/mock/playButton.png';
import styles from '../../styles/MainScreen.module.css';
import styled from './style';

interface Props {
  imageURL: string | StaticImageData;
  altText: string;
  titlePlayList: string;
}

const HeaderNavBar: FC<Props> = ({ imageURL, altText, titlePlayList }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <styled.Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.wrapperImage}>
        <Image
          src={imageURL}
          alt={altText}
          className={styles.imagePlayListHeaderNavBar}
        />
        <span className={styles.titlePlayList}>{titlePlayList}</span>
      </div>

      {isHovered && (
        <Image
          src={imagenPlayCircle}
          alt="play button"
          className={styles.imagePlayCircle}
        />
      )}
    </styled.Container>
  );
};

export default HeaderNavBar;
