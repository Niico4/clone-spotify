import Image, { StaticImageData } from 'next/image';
import React, { FC, useState } from 'react';

import imagenPlayCircle from '../../../../../public/mock/playButton.png';

import useStyles from './styles';

interface Props {
  imageURL: string | StaticImageData;
  altText: string;
  titlePlayList: string;
}

const HeaderNavBar: FC<Props> = ({ imageURL, altText, titlePlayList }) => {
  const { classes } = useStyles();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={classes.root}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={classes.wrapperImage}>
        <Image src={imageURL} alt={altText} className={classes.image} />
        <span className={classes.title}>{titlePlayList}</span>
      </div>

      {isHovered && (
        <Image
          src={imagenPlayCircle}
          alt="play button"
          className={classes.imagePlayCircle}
        />
      )}
    </button>
  );
};

export default HeaderNavBar;
