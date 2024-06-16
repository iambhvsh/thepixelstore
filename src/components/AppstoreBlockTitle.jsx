import React from 'react';
import './AppstoreBlockTitle.less';

const AppstoreBlockTitle = ({
  title,
  children,
}) => {
  return (
    <div className="appstore-block-title">
      <hr className="title-line" />
      <div className="title-content">
        <div className="title-text">
          <span>{title}</span>
        </div>
        <div className="title-actions">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AppstoreBlockTitle;
