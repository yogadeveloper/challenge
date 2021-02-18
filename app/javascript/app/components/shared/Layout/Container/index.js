import React from 'react';
import classNames from 'classnames';
import './index.scss';

const Container = ({className, children}) => (
  <div className={classNames('container', className)}>
    {children}
  </div>
)

export default Container;
