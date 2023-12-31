import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';

import useStyles from './styles';

interface Props {
  imageURL: string | StaticImageData;
  titlePlayList: string;
  altText: string;
  typeList: string;
  author: string;
}

const PlayListComponent: FC<Props> = ({
  imageURL,
  titlePlayList,
  altText,
  typeList,
  author,
}) => {
  const { classes } = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.wrapperComponent}>
        <figure className={classes.wrapperImage}>
          <Image src={imageURL} alt={altText} className={classes.image} />
        </figure>
        <div className={classes.wrapperText}>
          <p className={classes.titlePlayList}>{titlePlayList}</p>
          <span className={classes.span}>
            {typeList} • {author}
          </span>
        </div>
      </div>
    </section>
  );
};

export default PlayListComponent;
