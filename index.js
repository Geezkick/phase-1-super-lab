class Tree {
    constructor(species) {
        // Validate input
        if (!species || typeof species !== 'string') {
            throw new Error('Species must be a non-empty string');
        }
        this.species = species;
    }

    static definition() {
        return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
}

class Deciduous extends Tree {
    constructor(species, name) {
        super(species);
        // Validate name parameter
        if (!name || typeof name !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        this.name = name;
    }

    static definition() {
        return `${super.definition()} Deciduous trees shed their leaves annually.`;
    }
}

class Evergreen extends Tree {
    constructor(species, name) {
        super(species);
        // Validate name parameter
        if (!name || typeof name !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        this.name = name;
    }

    static definition() {
        return `${super.definition()} Evergreens keep their leaves all year round.`;
    }
}

// Test cases
try {
    // Valid cases
    const oak = new Deciduous("Quercus robur", "English Oak");
    console.log("Deciduous Test:");
    console.log("Species:", oak.species);
    console.log("Name:", oak.name);
    console.log("Definition:", Deciduous.definition());

    const pine = new Evergreen("Pinus sylvestris", "Scots Pine");
    console.log("\nEvergreen Test:");
    console.log("Species:", pine.species);
    console.log("Name:", pine.name);
    console.log("Definition:", Evergreen.definition());

    // Error cases
    // Uncomment these to test error handling
    // const invalid1 = new Deciduous("", "Test");  // Should throw error
    // const invalid2 = new Evergreen("Pinus", "");  // Should throw error
    // const invalid3 = new Tree();                  // Should throw error

} catch (error) {
    console.error("Error:", error.message);
}// Write your classes here