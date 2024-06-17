import React from 'react';
import {
  Popup,
  Page,
  Navbar,
  Link,
  List,
  ListItem,
  ListButton,
} from 'framework7-react';

import './Account.less';
import avatarSrc from '../assets/avatar.jpeg';

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
            link="#"
          >
            <Link popupClose slot="media" external href="#">
              <img src={avatarSrc} alt="Bhavesh Patil" />
            </Link>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Link external href="https://github.com/iambhvsh">
              <span slot="title">Github</span>
            </Link>
          </ListItem>
          <ListItem>
            <Link external href="https://t.me/iambhvsh">
              <span slot="title">Telegram</span>
            </Link>
          </ListItem>
          <ListItem>
            <Link external href="https://iambhvsh.vercel.app">
              <span slot="title">Website</span>
            </Link>
          </ListItem>
        </List>
        <List>
          <ListButton external href="mailto:iambhvshh@outlook.com">Apple ID</ListButton>
          <ListButton external href="mailto:iam.bhvsh@gmail.com">Google ID</ListButton>
        </List>
        <List>
          <ListItem>
            <Link external href="https://d.apkpure.com/b/APK/com.wuliang.xapkinstaller?version=latest">
              <span slot="title">Install XAPK</span>
            </Link>
          </ListItem>
        </List>
      </Page>
    </Popup>
  );
};

export default Account;
