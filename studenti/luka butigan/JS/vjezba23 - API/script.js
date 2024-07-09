/*
1. Izaberite jedan public API sa liste koji podržava REST standard, pruža podatke u JSON obliku i ima upute za dohvaćanje sa XMLHttpRequest objektom (nativni JavaScript jezik).

2. Napišite JS kod koji se priključuje na taj API (po uzoru na primjer iz prijašnje lekcije).

3. Izaberite jedan endpoint u APIju nad kojim možete napraviti GET request. 
Ispišite rezultat u konzolu. 
*/

// AJAX

var request = new XMLHttpRequest();

request.open('GET', 'https://dummyjson.com/products/1', true);
request.onload = function (result) {
  console.log(result.currentTarget.responseText);
};
request.send();

function getData() {
  fetch('https://dummyjson.com/products/1')
    .then((response) => response.json())
    .then((responseData) => console.log(JSON.stringify(responseData)))
    .catch((error) => console.log(error));
}
getData();

async function getData2() {
  try {
    const response = await fetch('https://dummyjson.com/products/1');
    const responseData = await response.json();

    console.log(JSON.stringify(responseData));
  } catch (error) {
    console.log(error);
  }
}

getData2();
