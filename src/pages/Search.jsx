import React, { useState } from 'react';
import { Searchbar, List, ListItem, Page, Navbar, Block } from 'framework7-react';

import { apps, games } from '../js/data'; // Assuming these are your data sources

import AppstorePage from '../components/AppstorePage';

import './Search.less';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    if (searchQuery.trim() === '') {
      setResults([]);
      setIsSearching(false);
      return;
    }

    const lowercasedQuery = searchQuery.toLowerCase();
    const filteredApps = apps.filter(app =>
      app.name.toLowerCase().includes(lowercasedQuery)
    );
    const filteredGames = games.filter(game =>
      game.name.toLowerCase().includes(lowercasedQuery)
    );

    setResults([...filteredApps, ...filteredGames]);
    setIsSearching(true);
  };

  return (
    <Page>
      <Navbar title="Search">
        <Searchbar
          value={query}
          onInput={(e) => handleSearch(e.target.value)}
          placeholder="Search apps and games"
          searchContainer=".search-list"
          searchIn=".item-title"
        />
      </Navbar>
      <div className="page-content">
        <div className="searchbar-backdrop"></div>
        {isSearching ? (
          results.length > 0 ? (
            <List className="search-results-list search-list">
              {results.map((item) => (
                <ListItem
                  key={item.id}
                  title={item.name}
                  link="#"
                  after={item.category}
                  media={<img src={item.icon} alt={item.name} />}
                />
              ))}
            </List>
          ) : (
            <Block className="no-results">
              No results found
            </Block>
          )
        ) : (
          <Block>
            <h2>Popular Apps & Games</h2>
            <List className="initial-list">
              {apps.concat(games).map((item) => (
                <ListItem
                  key={item.id}
                  title={item.name}
                  link="#"
                  after={item.category}
                  media={<img src={item.icon} alt={item.name} />}
                />
              ))}
            </List>
          </Block>
        )}
      </div>
    </Page>
  );
};

export default Search;
