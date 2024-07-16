/* 
1. Uključite jQuery biblioteku na vašu stranicu preko CDN-a ako vec niste.
2. Pri završetku loadanja stranice i rezultata pomoću jQueryja:
 	- kreirajte izmjenjujući zebra uzorak na redovima tablice
	- dodajte stil na sve header elemente tablice: boju darkBlue
3. Nakon 2 sekunde:
	- maknite sve redove Pokemona cija imena pocinju sa slovom p
	- popravite zebra uzorak
- ispisite podatak o broju skrivenih redova u novostvorenom div-u
 */

$(document).ready(function () {
  const source = document.getElementById('hb-template').innerHTML;
  const destination = document.getElementById('hb-result');
  const template = Handlebars.compile(source);

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon-color/yellow', true);

  function addStripes() {
    $('table tr').removeClass('striped');
    $('table tr:nth-child(even)').addClass('striped');
  }

  function afterRender() {
    $('table th').css('color', 'darkBlue');
    addStripes();

    $('table tr').on('mouseenter'),
      (event) => {
        $(event.currentTarget).css('backgroundColor', 'yellow');
      };

    $('table tr').on('mouseleave', (event) => {
      $(event.currentTarget).removeAttr('style');
    });

    setTimeout(function () {
      const hideEl = $("table td a:contains('p')").filter(function () {
        return this.innerHTML.indexOf('p') == 0;
      });
      hideEl.closest('tr').remove();
      addStripes();

      $('<div></div>')
        .insertAfter($('#hb-template'))
        .text('Skriveno: ' + hideEl.length);
    }, 2000);
  }

  function fillList() {
    const data = JSON.parse(xhr.response);
    const context = {
      pokemon: data.pokemon_species.slice(0, 20),
      tableClass: 'table',
    };
    const html = template(context);
    document.getElementById('hb-result').innerHTML = html;
    $('[data-toggle="popover"]').popover();

    afterRender();
  }
  xhr.onload = function () {
    fillList();
  };
  xhr.send();
});
