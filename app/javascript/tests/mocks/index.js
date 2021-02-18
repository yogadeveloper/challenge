export const imageData = {
  type: 'image/jpg',
  size: 54555,
  src: 'blob:image'
};

const invalidImageData = {
  type: 'application/pdf',
  size: 54555,
  src: 'blob:image'
};

export const file = new File(['sample'], 'sample.jpg', imageData );
export const invalidFile = new File(['sample'], 'sample.pdf', invalidImageData );
export const validFiles = [file, file];
export const invalidFiles = [invalidFile, invalidFile]
export const mixedFiles = [invalidFile, file]

