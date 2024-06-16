import React from 'react';

import './AppstoreBlockTitle.less';

const AppstoreBlockTitle = ({
  title,
  children,
}) => {
  return (
    <div className="block-title appstore-block-title">
      <span className="title-text">{title}</span>
      <hr className="title-line" />
      {children}
    </div>
  );
};

export default AppstoreBlockTitle;
