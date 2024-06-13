import React, { useState, useRef, useEffect } from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavRight,
  Button,
  Link,
  Icon,
  Block,
  BlockTitle,
  List,
  ListItem,
} from 'framework7-react';

import RatingStars from '../components/RatingStars';
import Screenshots from '../components/Screenshots';

import { apps, games } from '../js/data';

import './AppDetails.less';

function getAppByPackageName(packageName) {
  return [...apps, ...games].find((app) => app.packageName === packageName);
}

function formatDate(date) {
  const formatter = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: 'numeric' });
  return formatter.format(new Date(date));
}

const AppDetails = ({ f7route, backText }) => {
  const { packageName } = f7route.params;
  const app = getAppByPackageName(packageName);
  const pb = useRef(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  const ratingVotes = {
    5: 500,
    4: 100,
    3: 80,
    2: 50,
    1: 200,
  };

  const totalVotes = Object.values(ratingVotes).reduce((acc, current) => acc + current);

  useEffect(() => {
    const currentUrl = window.location.href;
    setShareUrl(currentUrl);
  }, []);

  function pageInit() {
    pb.current = f7.photoBrowser.create({
      photos: app.screenshots.map((screenshot) => ({ url: screenshot })),
      toolbar: false,
      navbarShowCount: false,
    });
  }

  function pageDestroy() {
    if (pb.current) pb.current.destroy();
  }

  function createAppDescription() {
    return {
      __html: (app.description || '').replace(/\n/g, '<br>'),
    };
  }

  async function handleShare() {
    try {
      await navigator.share({
        title: app.title,
        text: app.subtitle,
        url: shareUrl,
      });
    } catch (err) {
      console.error('Error sharing:', err);
    }
  }

  function openPhotoBrowser(index) {
    if (!pb.current) return;
    pb.current.open(index);
  }

  return (
    <Page onPageInit={pageInit} onPageBeforeRemove={pageDestroy}>
      <Navbar
        large
        transparent
        backLink={backText || 'Back'}
        className="app-navbar blur-navbar"
      >
        <NavLeft>
          <Link back iconF7="arrow_left" />
        </NavLeft>
        <NavTitle large>
          {app.title}
        </NavTitle>
        <NavRight>
          <Button external target="_blank" href={`https://d.cdnpure.com/b/APK/${app.packageName}?version=latest`} round fill>GET</Button>
          <Button onClick={handleShare}>
            <Icon f7="square_arrow_up" />
          </Button>
        </NavRight>
      </Navbar>

      <Block strong>
        <div className="app-header">
          <img src={app.icon} alt={app.title} className="app-header-icon" />
          <div className="app-header-content">
            <div className="app-header-title">{app.title}</div>
            <div className="app-header-subtitle">{app.subtitle}</div>
            <div className="app-header-ratings">
              <div className="app-header-rating">
                <div className="app-header-rating-value">{app.rating}</div>
                <RatingStars rating={app.rating} />
                <div className="app-header-rating-sub">{app.totalRatings} Ratings</div>
              </div>
            </div>
          </div>
        </div>
      </Block>

      <Block strong>
        <div className="app-screenshots">
          <div className="app-screenshots-gallery">
            {app.screenshots.map((screenshot, index) => (
              <Screenshots
                onClick={() => openPhotoBrowser(index)}
                src={screenshot}
                key={index}
                alt={`Screenshot ${index}`}
              />
            ))}
          </div>
        </div>
      </Block>

      <Block strong className={`app-description ${showFullDescription ? 'app-description-full' : ''}`}>
        <div className="app-description-content">
          <div className="app-description-text" dangerouslySetInnerHTML={createAppDescription()} />
          {!showFullDescription && <Link onClick={() => setShowFullDescription(true)}>Read More</Link>}
        </div>
      </Block>

      <Block strong>
        <BlockTitle>Ratings & Reviews</BlockTitle>
        <div className="app-ratings">
          <div className="app-ratings-summary">
            <div className="app-ratings-number">
              <b>{app.rating}</b>
              <span>out of 5</span>
            </div>
            <div className="app-ratings-votes-total">{totalVotes} Ratings</div>
          </div>
          <div className="app-ratings-votes">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div className="app-ratings-votes-row" key={rating}>
                <div className="app-ratings-votes-stars">
                  {[...Array(rating)].map((_, index) => (
                    <Icon key={index} f7="star_fill" />
                  ))}
                </div>
                <div className="app-ratings-votes-progress">
                  <span style={{ width: `${(ratingVotes[rating] / totalVotes) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Block>

      <Block strong>
        <BlockTitle>Reviews</BlockTitle>
        <div className="app-reviews">
          {app.reviews && app.reviews.map((review, index) => (
            <div className="app-review" key={index}>
              <div className="app-review-header">
                <span><b>{review.author}</b></span>
                <span>{formatDate(review.date)}</span>
              </div>
              <div className="app-review-header">
                <RatingStars rating={review.rating} />
                <span>{review.username}</span>
              </div>
              <div className="app-review-text">
                {review.text}
              </div>
            </div>
          ))}
        </div>
      </Block>

      {app.versions && app.versions.length > 0 && (
        <Block strong>
          <BlockTitle>What's New</BlockTitle>
          <p className="display-flex justify-content-space-between" style={{ opacity: 0.55 }}>
            <span>Version {app.versions[app.versions.length - 1].version}</span>
            <span>{formatDate(app.versions[app.versions.length - 1].release_date)}</span>
          </p>
          <p>{app.versions[app.versions.length - 1].release_notes || ''}</p>
        </Block>
      )}

      <Block strong>
        <BlockTitle>Information</BlockTitle>
        <List noHairlines noChevron className="app-information-list">
          <ListItem title="Provider" after={app.developer.name} />
          <ListItem title="Size" after={app.size} />
          <ListItem title="Compatibility" after="Works on this Android" />
          <ListItem title="Languages" after="English" />
          <ListItem title="Age Rating" after="12+" />
          <ListItem title="In-App Purchases" after="Yes" />
          <ListItem title="Copyright" after={`© ${app.developer.name}`} />
          <ListItem link={`https://apps.apple.com/developer/id${app.developer.id}`} external target="_blank" title="Developer Website">
            <Icon slot="after" f7="compass" />
          </ListItem>
          <ListItem link={`https://apps.apple.com/developer/id${app.developer.id}`} external target="_blank" title="Privacy Policy">
            <Icon slot="after" f7="hand_raised_fill" />
          </ListItem>
        </List>
      </Block>
    </Page>
  );
};

export default AppDetails;
