export const createElement = (songData) => {
  const listItem = document.createElement('li');
  const listItemParagraph = document.createElement('p');

  listItemParagraph.innerHTML = `${songData.artist} - ${songData.song}`;
  listItem.appendChild(listItemParagraph);
  return listItem;
};
