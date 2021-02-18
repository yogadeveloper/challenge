import React from 'react';
import classNames from 'classnames';
import './index.scss';

const Content = ({className, children}) => (
  <div className={classNames('content', className)}>
    {children}
  </div>
);

export default Content;
