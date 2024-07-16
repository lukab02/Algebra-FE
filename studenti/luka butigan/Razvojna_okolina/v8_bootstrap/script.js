/* 
1. Uključite Bootstrap biblioteku u vašu stranicu sa prošle vježbe (CSS i JS).
2. Vašu tablicu pretvorite u Bootstrap tablicu.
3. Tablicu učinite responzivnom pomoću Bootstrapa tako da je u mobilnoj verziji vidljivo samo ime vrste bez rednog broja.
4. Na mobilnoj verziji dodajte popover element koji se pojavljuje na klik na ime vrste sa linkom na više informacija o vrsti.
 */

$(document).ready(function () {
  const source = document.getElementById('hb-template').innerHTML;
  const destination = document.getElementById('hb-result');
  const template = Handlebars.compile(source);

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon-color/yellow', true);

  function fillList() {
    const data = JSON.parse(xhr.response);
    const context = {
      pokemon: data.pokemon_species.slice(0, 20),
      tableClass: 'table',
    };
    const html = template(context);
    document.getElementById('hb-result').innerHTML = html;
    $('[data-toggle="popover"]').popover();
  }
  xhr.onload = function () {
    fillList();
  };
  xhr.send();
});
