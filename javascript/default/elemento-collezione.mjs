export default class ElementoCollezione {
    constructor(collezionabile, proprietario, prestabile = true) {
        this.collezionabile = collezionabile;
        this.proprietario = proprietario;
        this.prestabile = prestabile;
        this.destinatario = null;
        this.inPrestito = false;
    }

    attualePossessore() {
        return (this.destinatario === null ? this.proprietario : this.destinatario);
    }

    prestatoA(collezionista) {
        if (this.prestabile && !this.inPrestito && collezionista !== this.proprietario) {
            this.destinatario = collezionista;
            this.inPrestito = true;
        }
    }

    restituisci() {
        if (this.inPrestito === true) {
            this.destinatario = null;
            this.inPrestito = false;
        }
    }
}