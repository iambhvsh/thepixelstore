import React from 'react';
import { Link } from 'framework7-react';

import './FeaturedApps.less';

const FeaturedApps = ({ apps, games, useThumbnail, backText }) => {
  // Combine apps and games into a single array
  const items = [...(apps || []), ...(games || [])];

  return (
    <div className="block featured-apps">
      {items.map((item) => (
        <div className="featured-app" key={item.packageName}>
          <Link noLinkClass href={`/app/${item.packageName}`} routeProps={{ backText }}>
            <div className="featured-app-headline">{item.featured}</div>
            <div className="featured-app-title">{item.title}</div>
            <div className="featured-app-subtitle">{item.subtitle}</div>
            <img loading="lazy" className="featured-app-image" alt={item.title} src={useThumbnail ? item.thumbnail : item.screenshots[0]} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FeaturedApps;
