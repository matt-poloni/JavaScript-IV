/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
  constructor(attr) {
    this.createdAt = new Date();
    this.name = attr.name;
    this.dimensions = attr.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
};

class CharacterStats extends GameObject {
  constructor(attr) {
    super(attr);
    this.healthPoints = attr.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage.`
  }
}

class Humanoid extends CharacterStats {
  constructor(attr) {
    super(attr);
    this.team = attr.team;
    this.weapons = attr.weapons;
    this.language = attr.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}

// Character creation
const mage = new Humanoid({
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

// Original tests
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch
class Hero extends Humanoid {
  constructor(attr) {
    super(attr);
  }
  attack(opponent=blackKnight) {
    console.log(`Our hero, ${this.name}, uses ${this.weapons[
      Math.floor(Math.random()*this.weapons.length)
    ]} on ${opponent.name}.`);
    let diceRoll = Math.floor(Math.random()*20);
    if (diceRoll > 0) {
      opponent.healthPoints -= diceRoll;
      console.log(opponent.takeDamage());
      if (opponent.healthPoints <= 0) {
        console.log(opponent.destroy());
      }
    } else {
      console.log(`Our hero, ${this.name}, failed to inflict damage upon ${opponent.name}`)
    }
  }
}

class Villain extends Humanoid {
  constructor(attr) {
    super(attr);
  }
  devastate = function(opponent=arthur) {
    console.log(`Our villain, ${this.name}, uses ${this.weapons[
      Math.floor(Math.random()*this.weapons.length)
    ]} on ${opponent.name}.`);
    let diceRoll = Math.floor(Math.random()*20);
    if (diceRoll > 0) {
      opponent.healthPoints -= diceRoll;
      console.log(opponent.takeDamage());
      if (opponent.healthPoints <= 0) {
        console.log(opponent.destroy());
      }
    } else {
      console.log(`Our villain, ${this.name}, failed to inflict damage upon ${opponent.name}`)
    }
  }
}

// Stretch Characters
const arthur = new Hero({
  dimensions: {
    length: 2,
    width: 2,
    height: 3,
  },
  healthPoints: 20,
  name: 'King Arthur',
  team: 'Knights of the Round Table',
  weapons: [
    'Coconuts',
    'Excalibur',
    'Violence Inherent in the System',
    'Holy Hand Grenade of Antioch',
  ],
  language: 'English',
});
const blackKnight = new Villain({
  dimensions: {
    length: 1,
    width: 1,
    height: 4,
  },
  healthPoints: 100,
  name: 'Black Knight',
  team: 'Black Knight',
  weapons: [
    'Sword',
    'His Boot',
    'Flesh Wound',
    'His Own Severed Arm',
    "'Whats Coming to You'",
  ],
  language: 'Loony',
});

// FIGHT!!!
console.log(arthur.greet());
console.log(blackKnight.greet());
arthur.attack(blackKnight);
blackKnight.devastate(arthur);