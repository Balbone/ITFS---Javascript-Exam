export default class CollectionItem {
    constructor(collectible, owner, lendable = true) {
        this.collectible = collectible;
        this.owner = owner;
        this.lendable = lendable;
        this.recipient = null;
        this.onLoan = false;
    }

    currentOwner() {
        return (this.recipient === null ? this.owner : this.recipient);
    }

    lendTo(collector) {
        if (this.lendable && !this.onLoan && collector !== this.owner) {
            this.recipient = collector;
            this.onLoan = true;
        }
    }

    return() {
        if (this.onLoan === true) {
            this.recipient = null;
            this.onLoan = false;
        }
    }
}