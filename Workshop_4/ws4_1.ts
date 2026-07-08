class Animal {
    constructor(public species: string, public sound: string) {
    }

    makeSound(): void {
        console.log(`The ${this.species} makes a sound: ${this.sound}`);
    }
}

const animal1 = new Animal("Dog (Canis lupus familiaris)", "Bark");
const animal2 = new Animal("Cat (Felis catus)", "Meow");
const animal3 = new Animal("Puffer fish (Tetraodon nigroviridis)", "...Blub");

animal1.makeSound();
animal2.makeSound();
animal3.makeSound();