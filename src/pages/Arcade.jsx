import React from 'react';
import { Block, Button, Link, List, ListItem } from 'framework7-react';

import { games } from '../js/data'; // Import your games data

import AppstorePage from '../components/AppstorePage';
import FeaturedApps from '../components/FeaturedApps';
import AppsTableList from '../components/AppsTableList';
import AppstoreBlockTitle from '../components/AppstoreBlockTitle';

import './Arcade.less';

const Arcade = () => {
  const featuredGames = games.filter((game) => game.featured);
  const exclusiveArcadeGames = games.filter((game) => game.arcadeExclusive);
  const newReleases = games.sort((game1, game2) => new Date(game2.release_date) - new Date(game1.release_date)).slice(0, 12);
  const categories = [
    { title: "Indie", icon: "💎" },
    { title: "Casual", icon: "👾" },
    { title: "Strategy", icon: "🏰" },
    { title: "Action", icon: "⚔️" },
    { title: "Racing", icon: "🏁" },
  ];

  return (
    <AppstorePage title="Arcade">
      <FeaturedApps backText="Arcade" apps={featuredGames} />

      <AppstoreBlockTitle title="Exclusive Arcade Games">
        <Link>See All</Link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Arcade" apps={exclusiveArcadeGames} />

      <AppstoreBlockTitle title="New Releases">
        <Link>See All</Link>
      </AppstoreBlockTitle>
      <AppsTableList backText="Arcade" apps={newReleases} />

      <AppstoreBlockTitle title="Categories">
        <Link>See All</Link>
      </AppstoreBlockTitle>
      <List className="categories-list safe-areas-inset" noChevron noHairlines>
        {categories.map((category, index) => (
          <ListItem key={index} title={category.title} link="#">
            <span role="img" slot="media" aria-label={category.title}>{category.icon}</span>
          </ListItem>
        ))}
      </List>

      <Block className="buttons-list">
        <Button large>Subscribe Now</Button>
      </Block>
    </AppstorePage>
  );
};

export default Arcade;
