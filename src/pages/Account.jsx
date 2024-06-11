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
            subtitle="@iambhvsh"
            chevronCenter
            link
          >
            <img slot="media" src="https://iambhvsh.vercel.app/assets/blog/authors/iambhvsh.png" alt="Bhavesh Patil" />
          </ListItem>
        </List>
        <List>
          <ListItem
            title="About"
            link
          />
          <ListItem
            title="Source Code" link="https://github.com/iambhvsh/app-store"
          />
        </List>
        <List>
          <ListButton>Redeem Gift Card</ListButton>
          <ListButton>Send Gift Card by Email</ListButton>
          <ListButton>Add Funds to Apple ID</ListButton>
        </List>
        <List>
          <ListItem
            title="Personalised Recommendations"
            link
          />
        </List>
      </Page>
    </Popup>
  );
};

export default Account;
