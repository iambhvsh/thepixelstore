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
        <Navbar title="Account">
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
            <img slot="media" src={avatarSrc} alt="Bhavesh Patil" />
          </ListItem>
        </List>
        <List>
          <ListItem title="Github">
            <Link external href="https://github.com/iambhvsh">Github</Link>
          </ListItem>
          <ListItem title="Telegram">
            <Link external href="https://t.me/iambhvsh">Telegram</Link>
          </ListItem>
          <ListItem title="Website">
            <Link external href="https://iambhvsh.vercel.app">Website</Link>
          </ListItem>
        </List>
        <List>
          <ListButton external href="mailto:iambhvshh@outlook.com">Apple ID</ListButton>
          <ListButton external href="mailto:iam.bhvsh@gmail.com">Google ID</ListButton>
        </List>
        <List>
          <ListItem title="Install XAPK">
            <Link external href="https://d.apkpure.com/b/APK/com.wuliang.xapkinstaller?version=latest">Install XAPK</Link>
          </ListItem>
        </List>
      </Page>
    </Popup>
  );
};

export default Account;
