import React from 'react';
import avatarSrc from '../assets/avatar.jpeg';
import {
  Popup,
  Page,
  Navbar,
  Link,
  List,
  ListItem,
  ListButton,
  BlockTitle,
} from 'framework7-react';

import './Account.less';

const Account = () => {
  return (
    <Popup push swipeToClose="to-bottom" className="account-popup">
      <Page className="account-page">
        <Navbar title="Developer">
          <Link popupClose slot="right">Done</Link>
        </Navbar>
        <List mediaList>
          <ListItem
            className="account-user"
            title="Bhavesh Patil"
            subtitle="iambhvsh"
            chevronCenter
            link
          >
            <img slot="media" src={avatarSrc} alt="Bhavesh Patil" />
          </ListItem>
        </List>
        
        <BlockTitle>User Profile</BlockTitle>
        <List>
          <ListItem
            title="Full Name"
            after="Bhavesh Patil"
          />
          <ListItem
            title="Username"
            after="iambhvsh"
          />
          <ListItem
            title="Email"
            after="iambhvshh@outlook.com"
            link="mailto: iambhvshh@outlook.com"
          />
        </List>

        <BlockTitle>Links</BlockTitle>
        <List>
          <ListButton
            title="Website"
            link="https://iambhvsh.vercel.app"
          />
          <ListButton
            title="Source Code"
            link="https://github.com/iambhvsh/app-store"
          />
          <ListButton
            title="Github"
            link="https://github.com/iambhvsh"></ListButton>
          <ListButton
            title="Telegram"
            link="https://t.me/iambhvsh"></ListButton>
          <ListButton
            title="Apple ID"
            link="mailto:iambhvshh@outlook.com"></ListButton>
        </List>
      </Page>
    </Popup>
  );
};

export default Account;
