export const addDataLast = (list, item) => {
  const filmId = Number(item?.kinopoiskId ?? item?.filmId);
  const itemWithTime = { ...item, sortTime: Date.now() };

  const alreadyExists = list.some(
    (film) => Number(film?.kinopoiskId ?? film?.filmId) === filmId
  );

  if (alreadyExists) {
    return list;
  }

  return [...list, itemWithTime];
};

export const addDataFirst = (list, item) => {
  const filmId = Number(item?.kinopoiskId ?? item?.filmId);
  const itemWithTime = { ...item, sortTime: Date.now() };

  const alreadyExists = list.some(
    (film) => Number(film?.kinopoiskId ?? film?.filmId) === filmId
  );

  if (alreadyExists) {
    return list;
  }

  return [itemWithTime, ...list];
};

export const removeData = (list, itemId) => {
  const id = Number(itemId);

  return list.filter(
    (film) => Number(film?.kinopoiskId ?? film?.filmId) !== id
  );
};
