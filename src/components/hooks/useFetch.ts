import { useEffect, useState } from 'react';

import { getAlbums, getUsers } from '../../api';

interface Item {
  id: number;
  name: string;
  title: string;
}

const useFetch = () => {
  const [users, setUsers] = useState<Item[]>([]);
  const [albums, setAlbums] = useState<Item[]>([]);

  const getUsersData = async () => {
    const usersData = await getUsers();
    setUsers(usersData);
  };

  const getAlbumsData = async () => {
    const albumsData = await getAlbums();
    setAlbums(albumsData);
  };

  useEffect(() => {
    getUsersData();
    getAlbumsData();
  }, []);
  return {
    users,
    albums,
  };
};

export default useFetch;
