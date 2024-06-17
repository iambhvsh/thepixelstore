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
            link
          >
            <img slot="media" src={avatarSrc} alt="Bhavesh Patil" />
          </ListItem>
        </List>
        <List>
          <ListItem
            title="Github"
            link="https://github.com/iambhvsh"
          />
          <ListItem
            title="Telegram"
            link="https://t.me/iambhvsh"
          />
          <ListItem
            title="Website"
            link="https://iambhvsh.vercel.app"
          />
        </List>
        <List>
          <ListButton link="mailto:iambhvshh@outlook.com">Apple ID</ListButton>
          <ListButton link="mailto:iam.bhvsh@gmail.com">Google ID</ListButton>
        </List>
        <List>
          <ListItem
            title="Install XAPK"
            link="https://d.apkpure.com/b/APK/com.wuliang.xapkinstaller?version=latest"
          />
        </List>
      </Page>
    </Popup>
  );
};

export default Account;
