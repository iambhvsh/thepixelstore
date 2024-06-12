import React from 'react';
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
            subtitle="@iambhvsh"
            chevronCenter
            link
          >
            <img slot="media" src="iambhvsh.png" alt="Bhavesh Patil" />
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
            after="@iambhvsh"
          />
          <ListItem
            title="Email"
            after="bhavesh@example.com"
          />
        </List>
        
        <BlockTitle>Account Actions</BlockTitle>
        <List>
          <ListButton>Redeem Gift Card</ListButton>
          <ListButton>Send Gift Card by Email</ListButton>
          <ListButton>Add Funds to Apple ID</ListButton>
        </List>

        <BlockTitle>Information</BlockTitle>
        <List>
          <ListItem
            title="About"
            link="#"
          />
          <ListItem
            title="Source Code"
            link="https://github.com/iambhvsh/app-store"
          />
          <ListItem
            title="Privacy Policy"
            link="#"
          />
          <ListItem
            title="Terms of Service"
            link="#"
          />
        </List>

        <BlockTitle>Settings</BlockTitle>
        <List>
          <ListItem
            title="Personalised Recommendations"
            link="#"
          />
        </List>

        <BlockTitle>Connect with Me</BlockTitle>
        <List>
          <ListItem
            title="Twitter"
            link="https://twitter.com/iambhvsh"
            external
            target="_blank"
          />
          <ListItem
            title="LinkedIn"
            link="https://linkedin.com/in/iambhvsh"
            external
            target="_blank"
          />
          <ListItem
            title="GitHub"
            link="https://github.com/iambhvsh"
            external
            target="_blank"
          />
        </List>
      </Page>
    </Popup>
  );
};

export default Account;
