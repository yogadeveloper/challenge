import React, { useState } from 'react'
import Logo from 'Shared/Logo';
import PreviewList from './PreviewList';
import FileInput from './FileInput';
import { FormContext } from 'Shared/contexts/FormContext';
import './index.scss';

const ImageForm = () => {
  const [images, setImages] = useState();
  const [validated, setValidated] = useState(true);

  const handleChange = (event) => {
    const imgs = [];

    [...event.target.files].forEach(file => {
      if (!file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
        setValidated(false);
        return false;
      }

      imgs.push({
        src: URL.createObjectURL(file),
        alt: file.name,
        type: file.type,
        size: file.size
      })
    });

    setImages(imgs);
  }

  const validateFiles = () => {}

  const removeImage = (index) => {
    let imgs = [...images];
    imgs.splice(index, 1);
    setImages(imgs);
  }

  return (
    <form className='form'>
      {
        images && images.length > 0 ?
          <>
            <p className='text-center notification-message'>You've chosen the following images</p>

            <FormContext.Provider value={{ removeImage: removeImage }}>
              <PreviewList images={images} />
            </FormContext.Provider>
          </>
          :
          <>
            {
              validated ? null
                :
              <div className="error validation-error">Please choose valid image type<br /> (jpg | jpeg | png | gif )</div>
            }
            <Logo />
            <FileInput onChange={handleChange} label='Upload Images' accept='image/*' />
          </>
      }
    </form>
  )
}

export default ImageForm;
