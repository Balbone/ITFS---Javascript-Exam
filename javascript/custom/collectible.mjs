export class Collectible {
  static count = 0;
  static items = [];

  constructor(name, description) {
    this.id = Collectible.assignId();
    this.name = name;
    this.description = description;
    Collectible.items.push(this);
  }

  static assignId() {
    const id = this.count;
    this.count++;
    return id;
  }

  static get(id) {
    return this.items.find(item => item.id === id);
  }
}

export class Watch extends Collectible {
  constructor(name, description, brand, model, reference, year, material) {
    super(name, description);
    this.brand = brand;
    this.model = model;
    this.reference = reference;
    this.year = year;
    this.material = material;
  }
}