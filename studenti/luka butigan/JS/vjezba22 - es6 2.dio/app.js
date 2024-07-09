/* 
1. Napišite Promise koji čeka funkciju getX, i na resolved reagira sa console.log-om vrijednosti vraćene vrijednosti, a na reject reagira sa console.log-om stringa "Oh no!" 
2. Ako već niste, prepišite sve funkcije u arrow funkcije. 
*/

const getX = () => {
  return Math.random() >= 0.5;
};

const promise = new Promise((resolve, reject) => {
  const x = getX();
  if (x) {
    return setTimeout(() => resolve(x), 1000);
  } else {
    return setTimeout(reject, 1000);
  }
});
promise
  .then(() => console.log(`Yay! ${value}`))
  .catch(() => console.log('Oh, No!'));
