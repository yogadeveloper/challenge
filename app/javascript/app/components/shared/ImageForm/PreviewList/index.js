import React, { useState } from 'react'
import PreviewItem from '../PreviewItem';
import './index.scss';

const PreviewList = ({images}) => (
  <div className='images-preview'>
    {
      images.map((image, i) => {
        return (
          <PreviewItem image={image} key={i} index={i} />
        )
      })
    }
  </div>
)

export default PreviewList;
