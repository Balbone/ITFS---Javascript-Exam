import ElementoCollezione from "./elemento-collezione.mjs";

/*
export default class Partecipante {
    costructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.prestito = [];
    }

    // tu puoi solo prendere in prestito e avere quindi lista di oggetti prestati
    presaInPrestito(collezionabile) {

    }

    restituzione(collezionabile) {

    }
}

    // [...]

class Collezionista extends Partecipante  {
    costructor(nome, cognome) {
        super(nome, cognome);
    }

    // si porta dietro tutti gli altri metodi definiti in questo file
}

*/

export default class Collezionista {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.collezione = [];
    }

    colleziona(collezionabile) {
        const elem = new ElementoCollezione(collezionabile, this);
        this.collezione.push(elem);
    }

    rimuovi(collezionabile) {
        let pos = -1;
        for (let i=0; i < this.collezione.length && pos < 0; i++) {
            if (this.collezione[i].collezionabile === collezionabile) {
                pos = i;
            }
        }
        if (pos >= 0) this.collezione.splice(pos, 1);
    }

    presta(collezionabile, collezionista) {
        for (let elem of this.collezione) {
            if (elem.collezionabile === collezionabile && elem.prestabile && !elem.inPrestito) { 
                // verifica che l'elemento sia prestabile e NON sia già in prestito
                // quindi lo cede a colui che lo vuole in prestito
                elem.prestatoA(collezionista);

                // lo inserisce effettivamente nella collezione del destinarario del prestito
                collezionista.collezione.push(elem);
                break;
            }
        }
    }

    riprendi(collezionabile) {
        for (let elem of this.collezione) {
            if (elem.collezionabile === collezionabile && elem.inPrestito) { // verifica che l'elemento sia in prestito
                // toglie l'elemento corrispondente dalla collezione del destinatario del prestito
                const aChiLhoPrestato = elem.attualePossessore();
                const pos = aChiLhoPrestato.collezione.indexOf(elem);
                if (pos >= 0) aChiLhoPrestato.collezione.splice(pos, 1);

                // il proprietario diventa anche il possessore
                elem.restituisci();
                break;
            }
        }
    }

}