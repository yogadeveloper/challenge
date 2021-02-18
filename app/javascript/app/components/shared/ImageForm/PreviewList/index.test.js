import React from 'react';
import PreviewList from './';
import PreviewItem from '../PreviewItem';
import { imageData } from 'Mocks';

describe('PreviewList', () => {
  it('should render single PreviewItem', () => {
    const component = shallow(<PreviewList images={[imageData]} />);
    expect(component.find(PreviewItem).length).toEqual(1);
  });

  it('should render multiple PreviewItems', () => {
    const component = shallow(<PreviewList images={[imageData, imageData]} />);
    expect(component.find(PreviewItem).length).toEqual(2);
  });
})
