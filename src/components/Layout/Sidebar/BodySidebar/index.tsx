import React from 'react';

import { imageNiico } from '../../../../../public/mock/index';
import useFetch from '../../../hooks/useFetch';
import LibraryHeaderComponent from '../HeaderSidebar/index';
import PlayListComponent from '../PlayListSection';

import LibraryBodyComponent from './Body';
import useStyles from './styles';

const SidebarBody = () => {
  const { classes } = useStyles();
  const { users, albums } = useFetch();
  const data = [...users, ...albums];

  return (
    <section className={classes.root}>
      <LibraryHeaderComponent />
      <div className={classes.wrapperBody}>
        <LibraryBodyComponent />

        <div className={classes.wrapperPlayList}>
          {data.map((item) => (
            <PlayListComponent
              key={item.id}
              imageURL={imageNiico}
              altText="list Niico"
              titlePlayList={item.title || 'title'}
              author={item.name || 'autor'}
              typeList={item.name || 'autor'}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SidebarBody;
