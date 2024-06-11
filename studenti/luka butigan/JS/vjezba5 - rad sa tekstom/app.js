var text = ' lorem ipsum dolor sit amet ';

//  1. Spremite duljinu stringa u varijablu.
var duljinaStringa = text.length;
console.log(duljinaStringa);

//  2. Izdvojite riječ 'sit' u zasebnu varijablu.
var rijecSit = text.substring(19, 3);
console.log(rijecSit);
//  3. Zamijenite riječ 'amet' sa riječi 'elit'.
var noviText = text.replace('amet', 'elit');
console.log(noviText);

//  4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
var dodaniText = text + ', consectetur adipiscing elit';
console.log(dodaniText);

//  5. Konvertirajte sve riječi u orginalnom stringu u velika slova
var velikaSlova = text.toUpperCase();
console.log(velikaSlova);

//  6. Maknite počenu prazninu u stringu
var bezPraznina = text.trim();
console.log(bezPraznina);

//  7. Nađite slovo na poziciji 12
var slovo = text.charAt(12);
console.log(slovo);
