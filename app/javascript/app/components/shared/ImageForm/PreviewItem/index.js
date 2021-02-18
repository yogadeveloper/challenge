import React from 'react';
import { formatSize } from 'Helpers';
import CrossIcon from 'Shared/icons/Cross';
import { FormContext } from 'Shared/contexts/FormContext';
import './index.scss';

const PreviewItem = ({image, index}) => {
  const { src, type, size, alt } = image;

  return (
    <div className='image-preview__item'>
      <FormContext.Consumer>
        {
          ({removeImage}) => (
            <CrossIcon
              className='image-preview__close-icon'
              onClick={() => removeImage(index)}
            />
          )
        }
      </FormContext.Consumer>

      <div className='image-wrapper'>
        <img src={src} alt={alt} />
      </div>

      <div className='image-preview__meta'>
        <div>Type: {type}</div>
        <div>Size: {formatSize(size)}</div>
      </div>
    </div>
  )
}

export default PreviewItem;

