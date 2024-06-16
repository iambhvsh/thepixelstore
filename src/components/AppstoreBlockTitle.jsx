import React from 'react';
import './AppstoreBlockTitle.less';

const AppstoreBlockTitle = ({
  title,
  children,
}) => {
  return (
    <div className="appstore-block-title">
      <hr className="title-line" />
      <div className="title-text">{title}</div>
      {children}
    </div>
  );
};

export default AppstoreBlockTitle;
