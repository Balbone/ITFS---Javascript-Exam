import Orologio from "./collezionabile.mjs";
import Collezionista from "./collezionista.mjs";

// creo 3 utenti
const persona1 = new Collezionista("Andrea", "Balbo Mossetto");
const persona2 = new Collezionista("Eric", "Clapton");
// const persona3 = new Partecipante("Mario", "Rossi");


// creo i collezionabili - orologio
// marchio, modello, referenza, anno
const orologio1  = new Orologio("Rolex", "Milgauss", "116400", "2020");
const orologio2  = new Orologio("Omega", "Speedmaster", "493272", "2005");
const orologio3  = new Orologio("Patek Philippe", "Calatrava", "1145", "1998");
const orologio4  = new Orologio("Audemars Piguet", "Royal Oak", "15300", "2008");
const orologio5  = new Orologio("Rolex", "GMT-Master II", "115734", "2015");
const orologio6  = new Orologio("Omega", "Seamaster", "40382", "1993");
const orologio7  = new Orologio("Jager Le-Coultre", "Reverso", "230537", "1963");

// assegno gli orologi ai collezionisti
persona1.colleziona(orologio1);
persona1.colleziona(orologio2);
persona1.colleziona(orologio7);
persona2.colleziona(orologio3);
persona2.colleziona(orologio4);
persona2.colleziona(orologio5);
persona2.colleziona(orologio6);

// printo collezioni di partenza
console.log("collezioni iniziali");
console.dir(persona1, {depth: 3});
console.dir(persona2, {depth: 3});

// operazioni tra gli utenti + stampa stati intermedi

/*
persona1.presta(elem2, persona2);
persona2.presta(elem1, persona1);
persona2.presta(elem3, persona1);

console.log("dopo il prestito");
console.dir(persona1, {depth: 3});
console.dir(persona2, {depth: 3});

persona1.riprendi(elem2);
persona2.riprendi(elem3);
console.log("dopo la restituzione");
console.dir(persona1, {depth: 3});
console.dir(persona2, {depth: 3});
console.dir(Collezionabile, {depth: 3, showHidden: true});
*/