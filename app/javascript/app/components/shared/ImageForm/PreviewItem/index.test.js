import React from 'react';
import PreviewItem from './';
import { imageData } from 'Mocks';
import { formatSize } from 'Helpers';

describe('PreviewItem', () => {
  const component = shallow(<PreviewItem image={imageData} />);
  const {type, size, src} = imageData;

  it('should render an image', () => {
    const img = component.find("img");

    expect(img.length).toEqual(1);
    expect(img.prop('src')).toEqual(src);
  });

  it('should render image meta', () => {
    expect(component.contains(type)).toEqual(true);
    expect(component.contains(formatSize(size))).toEqual(true);
  });
})

