//  1. Kreiraj objekt koji reprezentira neki specifični auto, sa bar 8 svojstava, od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.), a jedna je također objekt. Probajte referencirati druge vrijednosti objekta u funkcijama. Svaka funkcija mora primati argumente i vracati neku vrijednost.
//  2. Pozovite funkcije svog objekta sa argumentima i ispisite rezultat.
//  3. Sa petljom pristupi svim brojivim svojstvima tvog auto objekta i ispiši vrijednosti u konzoli zajedno sa njihovim imenima (kljucevima) (npr. ime: Ivan)
//  4. Ispiši u konzoli razumljivu rečenicu koja uključuje bar 2 svojstva tvog objekta.
//  5. Pretvori svoj objekt u JSON string.

var auto = {
  brend: {
    tip: 'BMW',
    model: '330D',
  },
  boja: 'plava',
  brzina: '60',
  maxBrzina: '280',
  godinaProizvodnje: '2020',
  ubrzaj: function (brojSekundi) {
    while (brojSekundi && this.brzina <= this.maxBrzina) {
      this.brzina = this.brzina + 10;
      brojSekundi = brojSekundi - 5;
    }
    return this.brzina;
  },
  zakoci: function (brojSekundi) {
    while (brojSekundi) {
      this.brzina = this.brzina - 30;
      brojSekundi = brojSekundi - 4;
    }
    if (this.brzina < 0) {
      return 0;
    } else {
      return this.brzina;
    }
  },
  promijeniBoju: function (novaBoja) {
    this.boja = novaBoja;
  },
};

// 2.
console.log(auto.boja);
auto.promijeniBoju('narančasta');
console.log(auto.boja);
console.log(auto.ubrzaj(10));
console.log(auto.zakoci(4));

//  3.
for (var key in auto) {
  if (auto.propertyIsEnumerable(key)) {
    console.log(key + ':' + auto[key]);
  }
}

//  4.
console.log('Boja mog ' + auto.brend.tip + ' je ' + auto.boja);

// 5.
console.log(JSON.stringify(auto));
