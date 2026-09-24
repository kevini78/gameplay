import type { ImageSource } from 'expo-image';

export type CategoryId = 'ranked' | 'duel' | 'fun';

export type Category = {
  id: CategoryId;
  title: string;
  icon: ImageSource;
  iconWidth: number;
};

export const categories: Category[] = [
  { id: 'ranked', title: 'Ranqueada', icon: require('../../assets/icons/cat-ranked.svg'), iconWidth: 48 },
  { id: 'duel', title: 'Duelo 1x1', icon: require('../../assets/icons/cat-duel.svg'), iconWidth: 48 },
  { id: 'fun', title: 'Diversão', icon: require('../../assets/icons/cat-fun.svg'), iconWidth: 42 },
];

export type Match = {
  id: string;
  guild: string;
  game: string;
  cover: ImageSource;
  category: string;
  date: string;
  isHost: boolean;
};

export const matches: Match[] = [
  {
    id: '1',
    guild: 'Lendários',
    game: 'League of Legends',
    cover: require('../../assets/images/game-lol.png'),
    category: 'Ranqueada',
    date: '18/06 às 21:00h',
    isHost: true,
  },
  {
    id: '2',
    guild: 'Yeah, boy',
    game: 'Red Dead Redemption 2',
    cover: require('../../assets/images/game-rdr2.png'),
    category: 'Diversão',
    date: '23/06 às 19:00h',
    isHost: false,
  },
  {
    id: '3',
    guild: 'Rumo ao topo',
    game: 'Counter Strike: Global Offensive',
    cover: require('../../assets/images/game-csgo.png'),
    category: '1x1',
    date: '20/06 às 09:00h',
    isHost: true,
  },
  {
    id: '4',
    guild: 'Bora queimar tudo',
    game: 'Apex Legends',
    cover: require('../../assets/images/game-apex.png'),
    category: 'Ranqueada',
    date: '20/06 às 14:20h',
    isHost: true,
  },
  {
    id: '5',
    guild: 'Valorosos',
    game: 'Valorant',
    cover: require('../../assets/images/game-valorant.png'),
    category: 'Diversão',
    date: '18/06 às 21:00h',
    isHost: true,
  },
];

export type Player = {
  id: string;
  name: string;
  available: boolean;
  avatar: ImageSource;
  avatarPosition?: 'center' | 'top';
};

export const guildDetails = {
  name: 'Lendários',
  description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
  banner: require('../../assets/images/banner-lendarios.jpg') as ImageSource,
  players: [
    {
      id: '1',
      name: 'Tiago Luchtenberg',
      available: true,
      avatar: require('../../assets/images/avatar-tiago.jpg'),
    },
    {
      id: '2',
      name: 'Rodrigo Gonçalves',
      available: false,
      avatar: require('../../assets/images/avatar-rodrigo.jpg'),
    },
    {
      id: '3',
      name: 'Diego Fernandes',
      available: false,
      avatar: require('../../assets/images/avatar-diego.jpg'),
      avatarPosition: 'top',
    },
  ] as Player[],
};

export const selectedServer = {
  name: 'Valorosos',
  game: 'Valorant',
  cover: require('../../assets/images/game-valorant.png') as ImageSource,
};
