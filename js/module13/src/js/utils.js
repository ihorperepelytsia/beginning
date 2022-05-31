export function mapper(obj) {
  const list = obj.map(e => ({
    webformatURL: e.webformatURL,
    largeImageURL: e.largeImageURL,
    likes: e.likes,
    views: e.views,
    comments: e.comments,
    downloads: e.downloads,
    tags: e.tags,
  }));
  return list;
}
