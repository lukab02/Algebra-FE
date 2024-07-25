/* 
1. Prepišite XHR poziv u jQuery AJAX poziv.
2. Dodajte funkciju koja se poziva na neuspješan kraj API poziva. Ta funkcija ispisuje poruku na ekranu sa dodatnim infomacijama o greški.
3. Dodajte u tablicu:
    - prirodno staniše vrste (link na detaljne informacije o staništu)	
    - brzinu rasta
 */

$(document).ready(function () {
  const source = document.getElementById('hb-template').innerHTML;
  const destination = document.getElementById('hb-result');
  const template = Handlebars.compile(source);

  /* let xhr = new XMLHttpRequest(); */

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
  $.ajax('https://pokeapi.co/api/v2/pokemon-color/yellow', {
    success: function (data, status, jqXHR) {
      $.when
        .apply(
          $,
          data.pokemon_species.map(function (pokemon) {
            return getDetails(pokemon);
          })
        )
        .done(function () {
          fillList();
        });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(
        `${jqXHR.status} - ${jqXHR.statusText} - ${jqXHR.responseText}`
      );
    },
  });
});
