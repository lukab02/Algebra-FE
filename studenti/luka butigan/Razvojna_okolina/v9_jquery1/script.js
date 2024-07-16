/* 
1. Pomoću jQueryja:
	- prepišite sve događaje napisane u vanilla JSu u jQuery sintaksu
	- pratite resize događaj na korisničkom ekranu ispisujući širinu ekrana u konzolu
	- pratite kretanje miša i na ulazak miša preko retka tablice promijenite mu pozadinsku boju
  - na izlazak miša sa retka mora se pozadinska boja vratiti na prijašnju
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

  $(window).resize(() => {
    console.log($(window).width());
  });

  xhr.send();
});
