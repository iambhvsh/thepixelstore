/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useRef } from 'react';
import {
  f7,
  Page,
  Navbar,
  Button,
  Link,
  Icon,
  List,
  ListItem,
} from 'framework7-react';

import RatingStars from '../components/RatingStars';
import AppstoreBlockTitle from '../components/AppstoreBlockTitle';
import ScrenshotThumb from '../components/ScreenshotThumb';

import { apps, games } from '../js/data';

import './AppDetails.less';

function getAppByPackageName(packageName) {
  return [...apps, ...games].find((app) => app.packageName === packageName);
}

function formatDate(date) {
  const formatter = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric' });
  return formatter.format(new Date(date));
}

const AppDetails = ({ packageName, backText }) => {
  const app = getAppByPackageName(packageName);
  const pb = useRef(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const ratingVotes = {
    5: 500,
    4: 100,
    3: 80,
    2: 50,
    1: 200,
  };

  const totalVotes = Object.values(ratingVotes).reduce((acc, current) => acc + current, 0);

  function pageInit() {
    pb.current = f7.photoBrowser.create({
      photos: [...app.screenshots],
      toolbar: false,
      navbarShowCount: false,
    });
  }

  function pageDestroy() {
    if (pb.current) pb.current.destroy();
  }

  function openPhotoBrowser(index) {
    if (!pb.current) return;
    pb.current.open(index);
  }

  function createAppDescription() {
    return {
      __html: (app.description || '').replace(/\n/g, '<br>'),
    };
  }

  return (
    <Page onPageInit={pageInit} onPageBeforeRemove={pageDestroy}>
      <Navbar
        transparent
        backLink={backText || 'Back'}
        className="app-navbar"
      >
        <div className="app-navbar-icon" slot="title">
          <img src={app.icon} alt={app.title} />
        </div>
        <div className="app-navbar-button" slot="right">
          <Button external target="_blank" href={`https://d.cdnpure.com/b/APK/${app.packageName}?version=latest`} round fill>GET</Button>
        </div>
      </Navbar>
      <div className="block app-header">
        <img src={app.icon} alt={app.title} className="app-header-icon" />
        <div className="app-header-content">
          <div className="app-header-title">{app.title}</div>
          <div className="app-header-subtitle">{app.subtitle}</div>
          <div className="app-header-actions">
            <Button external target="_blank" href={`https://play.google.com/store/apps/details?id=${app.packageName}`} round fill>GET</Button>
            <Link iconF7="square_arrow_up" />
          </div>
          <div className="app-header-ratings">
            <div className="app-header-rating">
              <div className="app-header-rating-value">{app.rating}</div>
              <RatingStars rating={app.rating} />
              <div className="app-header-rating-sub">930 Ratings</div>
            </div>
          </div>
        </div>
      </div>
      <div className="block app-screenshots">
        {app.screenshotsThumbs.map((screenshot, index) => (
          <ScrenshotThumb
            onClick={() => openPhotoBrowser(index)}
            src={screenshot}
            key={index}
            alt="Screenshot"
          />
        ))}
      </div>
      <div className={`block app-description ${showFullDescription ? 'app-description-full' : ''}`}>
        <div className="app-description-content">
          <div className="app-description-text" dangerouslySetInnerHTML={createAppDescription()} />
          {!showFullDescription && (
            <Link onClick={() => setShowFullDescription(true)}>more</Link>
          )}
        </div>
      </div>
      <AppstoreBlockTitle title="Ratings & Reviews">
        <Link>See All</Link>
      </AppstoreBlockTitle>
      <div className="block app-ratings">
        <div className="app-ratings-number">
          <b>{app.rating}</b>
          <span>out of 5</span>
        </div>
        <div className="app-ratings-votes">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div className="app-ratings-votes-row" key={rating}>
              <div className="app-ratings-votes-stars">
                {Array.from({ length: rating }).map((el, index) => (
                  <Icon key={index} f7="star_fill" />
                ))}
              </div>
              <div className="app-ratings-votes-progress">
                <span style={{ width: `${(ratingVotes[rating] / totalVotes) * 100}%` }} />
              </div>
            </div>
          ))}
          <div className="app-ratings-votes-total">{totalVotes} Ratings</div>
        </div>
      </div>
      {/* Random reviews */}
      <div className="block app-reviews">
        {/* Example review */}
        <div className="app-review">
          <div className="app-review-header">
            <span><b>John</b></span>
            <span>2d ago</span>
          </div>
          <div className="app-review-header">
            <RatingStars rating={5} />
            <span>johndoe</span>
          </div>
          <div className="app-review-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laborum debitis natus cum quae est rerum cupiditate cumque delectus eaque ipsa, accusamus facilis deleniti consequuntur, aliquam soluta minima, eos exercitationem.
          </div>
        </div>
        {/* Other reviews can be added here */}
      </div>
      {app.versions && app.versions.length > 0 && (
        <>
          <AppstoreBlockTitle title="What's New" />
          <div className="block">
            <p className="display-flex justify-content-space-between" style={{ opacity: 0.55 }}>
              <span>Version {app.versions[app.versions.length - 1].version}</span>
              <span>{formatDate(app.versions[app.versions.length - 1].release_date)}</span>
            </p>
            <p>{app.versions[app.versions.length - 1].release_notes || ''}</p>
          </div>
        </>
      )}
      <AppstoreBlockTitle title="Information" />
      <List noHairlines noChevron className="safe-areas-inset app-information-list">
        <ListItem title="Provider" after={app.developer.name} />
        <ListItem title="Size" after={app.size} />
        <ListItem title="Compatibility" after="Works on this iPhone" />
        <ListItem title="Languages" after="English" />
        <ListItem title="Age Rating" after="12+" />
        <ListItem title="In-App Purchases" after="Yes" />
        <ListItem title="Copyright" after={`© ${app.developer.name}`} />
        <ListItem link={`https://play.google.com/store/apps/developer?id=${app.developer.id}`} external target="_blank" title="Developer Website">
          <Icon slot="after" f7="compass" />
        </ListItem>
        <ListItem link={`https://play.google.com/store/apps/developer?id=${app.developer.id}`} external target="_blank" title="Privacy Policy">
          <Icon slot="after" f7="hand_raised_fill" />
        </ListItem>
      </List>
    </Page>
  );
};

export default AppDetails;
