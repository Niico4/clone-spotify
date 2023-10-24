import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';

import styles from '../styles/Sidebar.module.css';
import styled from '../styles/style';

interface Props {
  imageURL: string | StaticImageData;
  altText: string;
  titlePlayList: string;
  typeList: string;
  author: string;
}

const SidebarPlayList: FC<Props> = ({
  imageURL,
  altText,
  titlePlayList,
  typeList,
  author,
}) => {
  return (
    <div className={styles.containerPlayList}>
      <styled.SectionPlayList>
        <figure className={styles.wrapperImage}>
          <Image
            src={imageURL}
            alt={altText}
            className={styles.imagePlayList}
          />
        </figure>
        <div className={styles.wrapperTypeListAndAuthor}>
          <p className={styles.paragraph}>{titlePlayList}</p>
          <span className={styles.typeListText}>
            {typeList} • {author}
          </span>
        </div>
      </styled.SectionPlayList>
    </div>
  );
};

export default SidebarPlayList;
