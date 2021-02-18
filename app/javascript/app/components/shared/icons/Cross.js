import React from 'react';
import Cross from 'Icons/Cross.svg';

const CrossIcon = ({className, onClick}) => (
  <img src={Cross}
       className={className}
       onClick={onClick}
  />
)

export default CrossIcon;
