import { getPublicAssetPath } from './publicAssetPath.js';

const assetModules = import.meta.glob('../assets/*.{png,jpg,jpeg,JPG,JPEG,webp,avif,gif,svg}', {
  eager: true,
  import: 'default',
});

const assetImageMap = Object.fromEntries(
  Object.entries(assetModules).map(([path, url]) => [path.split('/').pop().toLowerCase(), url])
);

export function getFallbackProductImage() {
  return assetImageMap['pizza.jpeg'] ?? getPublicAssetPath('images/pizza.jpeg');
}

export function resolveProductImage(image) {
  if (!image) {
    return getFallbackProductImage();
  }

  if (/^(https?:)?\/\//.test(image)) {
    return image;
  }

  const normalizedPath = image.replace(/^\/+/, '');
  const fileName = normalizedPath.split('/').pop().toLowerCase();

  if (assetImageMap[fileName]) {
    return assetImageMap[fileName];
  }

  if (normalizedPath.startsWith('images/')) {
    return getPublicAssetPath(normalizedPath);
  }

  return getPublicAssetPath(`images/${normalizedPath}`);
}