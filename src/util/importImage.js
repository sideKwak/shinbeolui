// src/utils/importImages.js
export const importAllImages = (requireContext) => {
    const images = {};
    requireContext.keys().forEach((key) => {
      const imageName = key.replace('./', '').split('.')[0]; // 파일명 추출
      images[imageName] = requireContext(key);
    });
    return images;
};