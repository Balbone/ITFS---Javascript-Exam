import { Collectible} from './collectible.mjs';

export class Participant {
    static _count = 0;
  
    constructor(firstName, lastName) {
      this._id = Participant.assignId();
      this.firstName = firstName;
      this.lastName = lastName;
      this._available = [];
    }
  
    static assignId() {
      const id = this._count;
      this._count++;
      return id;
    }

    get id() {
      return this._id;
    }
    
    takeInLoan(collectibleId, collectorId) {
      const collectible = Collectible.get(collectibleId);
      const collector = Collector.id(collectorId);
      if (!collectible || !collector) return;
  
      if (!collector.collection.includes(collectible)) {
        return;
      }
  
      this._available.push(collectible);
      collector.removeFromCollection(collectible);
    }
    
    get available() {
      return this._available;
    }
  }

export class Collector extends Participant {

  constructor(firstName, lastName) {
    super(firstName, lastName);
    this._collection = [];
  }

  static get id() {
    return super.get(id);
  }

  get collection() {
    return this._collection;
  }

  /*
  The id property is defined using a getter method, which returns the value 
  of the private _id field. This allows the id property to be accessed like a regular property, 
  but it is read-only and cannot be modified.

  The static _count field is now virtually private, 
  as it is prefixed with an underscore. This is a common convention in JavaScript 
  to indicate that the field is intended for internal use and should not be accessed 
  directly from outside the class.
  */

  lend(collector, collectible) {
    if (!this.collection.includes(collectible)) {
      throw new Error(`Collector ${this.firstName} ${this.lastName} does not have the collectible ${collectible.name} in their collection.`);
    }
    this.collection = this.collection.filter(c => c !== collectible);
    collector.collection.push(collectible);
  }

  addToCollection(collectible) {
    this._collection.push(collectible);
  }

  takeBack(collectible) {
    if (!collectible.lentTo.collection.includes(collectible)) {
      throw new Error(`Collector ${collectible.lentTo.firstName} ${collectible.lentTo.lastName} does not have the collectible ${collectible.name} in their collection.`);
    }
    collectible.lentTo.collection = collectible.lentTo.collection.filter(c => c !== collectible);
    this.collection.push(collectible);
  }

  removeFromCollection(collectible) {
    if (!this._collection.includes(collectible)) {
      throw new Error(`Collector ${this.firstName} ${this.lastName} does not have the collectible ${collectible.name} in their collection.`);
    }
    this._collection = this._collection.filter(c => c !== collectible);
  }

  /*
  The currentCollection property returns an array containing all the items in the collector's 
  possession, either owned by the collector or received on loan from others. 
  It is calculated by concatenating the arrays returned by the ownCollection 
  and inLoanCollection properties using the spread operator (...).
  */
  get currentCollection() {
    return [...this.ownCollection, ...this.inLoanCollection];
  }

  /*
  The ownCollection property returns an array containing only the items owned by the collector. 
  It filters the _collection array to include only those elements that are not currently 
  lent to another Collector.
  */
  get ownCollection() {
    return this._collection.filter(c => !c.lentTo);
  }

  /*
  The inLoanCollection property returns an array containing only the items that the collector 
  has on loan. It filters the _collection array to include only those elements that are 
  currently lent to another Collector.
  */
  get inLoanCollection() {
    return this._collection.filter(c => c.lentTo);
  }

  /*
  The available property returns an array containing the items owned by the collector 
  that are available for loan. It filters the ownCollection array to include only those 
  elements that are lendable.
  */
  get available() {
    return this.ownCollection.filter(c => c.lendable);
  }

  /*
  The lent property returns an array containing the items owned by the collector that are 
  currently on loan. It filters the ownCollection array to include only those elements that 
  are currently lent to another Collector.
  */
  get lent() {
    return this.ownCollection.filter(c => c.lentTo);
  }

  /*
  The private property returns an array containing items owned by the collector that are 
  not lent out. It filters the ownCollection array to include only those elements that are not 
  lendable.
  */
  get private() {
    return this.ownCollection.filter(c => !c.lendable);
  }
}