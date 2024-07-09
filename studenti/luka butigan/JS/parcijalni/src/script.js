import { fetchData } from './data.js';
import { createElement } from './render.js';

const inputEl = document.getElementById('search-term');
const ulEl = document.getElementById('songs-list');
const noSongsMsg = document.getElementById('nosongs');
const loadingSpinner = document.getElementById('loading-spinner');

var timeout = null;

export default () => {
  const updateMusicList = (event) => {
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      while (ulEl.firstChild) {
        ulEl.removeChild(ulEl.firstChild);
      }

      const inputElValue = inputEl.value;
      if (inputElValue) {
        //Obrisi nosongs
        noSongsMsg.style.display = 'none';

        //Prikaži loading spinner
        loadingSpinner.style.display = 'block';

        //Dohvati podatke
        var retData = [];
        retData = await fetchData(inputElValue);

        //Obrisi loading spinner
        loadingSpinner.style.display = 'none';

        if (retData.length !== 0) {
          for (var i in retData) {
            if (retData[i].song && retData[i].artist) {
              const listItemEl = createElement(retData[i]);
              ulEl.appendChild(listItemEl);
            }
          }
        } else {
          //Prikazi nosongs
          noSongsMsg.style.display = 'block';
        }
      } else {
      }
    }, 800);
  };
};

inputEl.addEventListener('keyup', updateMusicList);
