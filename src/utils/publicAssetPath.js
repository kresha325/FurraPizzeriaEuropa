export function getBasePath() {
  return import.meta.env.BASE_URL.replace(/\/$/, '');
}

export function getPublicAssetPath(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}