import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { validFiles, invalidFiles, mixedFiles } from 'Mocks';
import ImageForm from './index.js';
import PreviewList from './PreviewList';
import PreviewItem from './PreviewItem';
import CrossIcon from 'Shared/icons/Cross';
import { formatSize } from 'Helpers';

Enzyme.configure({ adapter: new Adapter() });

describe('ImageForm', () => {
  global.URL.createObjectURL = jest.fn();
  let component = mount(<ImageForm />);

  const itemsLength = () => component.find(PreviewItem).length;
  const listLength = () => component.find(PreviewList).length;
  const removeItem = () => component.find(CrossIcon).first().invoke('onClick')();
  const getPreviewItemLength = () => component.find(CrossIcon).first();

  const uploadImages = (files) => {
    component.find('input[type="file"]').simulate('change', {
      target: { files: files }
    });
  }

  const expectFormIsShown = () => {
    expect(component.find('input[type="file"]')).toExist();
    expect(component.find('label')).toExist();
  };

  beforeEach(() => {
    component.mount();
  });

  afterEach(() => {
    component.unmount();
  });

  it('should render image upload label and field', () => {
    expectFormIsShown();
  });

  it('should not render PreviewList before upload', () => {
    expect(listLength()).toEqual(0);
  });

  it('should render PreviewList on image upload', () => {
    uploadImages(validFiles);
    expect(listLength()).toEqual(1);
  });

  describe('removeItem()', () => {
    it('should remove PreviewItem by clicking on cross icon', () => {
      uploadImages(validFiles);
      removeItem();
      expect(itemsLength()).toEqual(1);
    })

    it('should render form after PreviewList Items becomes empty', () => {
      uploadImages([validFiles[0]]);
      removeItem();
      expect(listLength()).toEqual(0);
      expectFormIsShown();
    });
  });

  describe('with mixed files', () => {
    it('should render only correct file', () => {
      expect(itemsLength()).toEqual(0);
      uploadImages(mixedFiles);
      expect(itemsLength()).toEqual(1);
    });
  });

  describe('with only invalid files', () => {
    it('should render error message', () => {
      expect(itemsLength()).toEqual(0);
      uploadImages(invalidFiles);
      expect(itemsLength()).toEqual(0);
      expect(component.find('.error.validation-error')).toExist();
    });
  });
});
