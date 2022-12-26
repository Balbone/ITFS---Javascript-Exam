class Collezionabile {
    
    static count = 0;
    static assegnaId() {
        const id = this.count; this.count++;
        return id;
    }

    constructor(nome, descrizione) {
        this.nome = nome;
        this.descrizione = descrizione;
        this.identificatore = Collezionabile.assegnaId();
    }
}

   
export default class Orologio extends Collezionabile {
    constructor(nome, descrizione, marchio, modello, referenza, anno) {
        super(nome, descrizione);
        this.marchio = marchio;
        this.modello = modello;
        this.referenza = referenza;
        this.anno = anno;
    }
}