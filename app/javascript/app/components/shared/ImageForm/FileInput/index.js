import React from 'react';
import './index.scss';

const FileInput = ({onChange, label, accept}) => (
  <div className='input file-input'>
    <input id='file' type='file' onChange={onChange} multiple className='file' accept={accept} />
    <label htmlFor='file'>{label}</label>
  </div>
)

export default FileInput;
