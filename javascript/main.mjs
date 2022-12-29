import { Collectible, Watch } from './collectible.mjs';
import { Participant, Collector} from './participant.mjs';

const collector1 = new Collector('Mario', 'Rossi');
const collector2 = new Collector('John', 'Doe');
const participant = new Participant('Akira', 'Toriyama');

/*
const watch1 = new Watch('Padellone verdone', 'Sporty and anti-magnetic watch', 'Rolex', 'Milgauss', '116400', 2020, 'Steel');

console.log(watch1)
*/


for (let i = 0; i < 10; i++) {
  const watch = new Watch(`Clock ${i + 1}`, 'A beautiful clock', 'Brand', 'Model', 'Reference', 2020, 'Material');
  if (i % 2 === 0) {
    collector1.addToCollection(watch);
  } else {
    collector2.addToCollection(watch);
  }
}

console.log(collector1.ownCollection);
console.log(collector2.ownCollection);

participant.takeInLoan(1, 1);
console.log(participant.available);
console.log(collector1.ownCollection);

collector2.addToCollection(participant.available[0]);
console.log(participant.available);
console.log(collector2.ownCollection);


/*
import Collezionabile from "./collezionabile.mjs";
import Collezionista from "./collezionista.mjs";

const persona1 = new Collezionista("Ada", "Lovelace");
const persona2 = new Collezionista("Alan", "Turing");

const elem1 = new Collezionabile("Marchingegno", "Macchina di Turing completa di nastro");
const elem2 = new Collezionabile("Motore Analitico", "Il primo computer della storia, se solo fosse esistito");
const elem3 = new Collezionabile("Biro", "Una comune penna a sfera");
const elem4 = new Collezionabile("Lettera 22", "Una macchina da scrivere, per chi ancora ricorda cosa siano");
const elem5 = new Collezionabile("33 giri", "Un disco, stanno tornando di moda");
const elem6 = new Collezionabile("Pellicola fotografica", "Ebbene sì, c'è ancora chi fa fotografie analogiche");

persona1.colleziona(elem2);
persona1.colleziona(elem4);
persona1.colleziona(elem6);
persona2.colleziona(elem1);
persona2.colleziona(elem3);
persona2.colleziona(elem5);

console.log("collezioni iniziali");
console.dir(persona1, {depth: 3});
console.dir(persona2, {depth: 3});

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