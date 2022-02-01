import { renderBlock } from './lib.js'

export const getUserData = (): any => {
  const user: unknown = JSON.parse(localStorage.getItem('user') || '{}');

  if (user instanceof Object) {
    return user;
  };

  return null;
}

export const getFavoritesAmount = (): Number => {
  const favoriteItemsAmount: unknown = parseInt(localStorage.getItem('favoritesAmount') || '0');

  if (favoriteItemsAmount instanceof Number) {
    return favoriteItemsAmount;
  };

  return 0;
}

export function renderUserBlock(username: string, avatar: string, favoriteItemsAmount: Number) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatar}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${username}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
