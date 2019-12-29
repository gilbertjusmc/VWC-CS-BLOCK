// class MapDS {
//     constructor() {

//     }
// }

// let detroitSports = new Map();

// // Set elements into the Map
// detroitSports.set("Red Wings", "Hockey");
// detroitSports.set("Lions", "Football");
// detroitSports.set("Tigers", "Baseball");
// detroitSports.set("Pistons", "Basketball");

// console.log(detroitSports);

class newMap {
    // set constructor, empty array with 2 arrays inside for key, value
    constructor(data = [[], []]) {
        // set key and value position in data
        this.key = data[0];
        this.value = data[1];
    }

    // Set methods for the class: print, add, retrieve, remove, 

    // Prints outputs
    print() {
        let result = [];
        for (let iterate = 0; iterate < this.key.length; iterate++) {
            result.push([this.key[iterate], this.value[iterate]])
        }
        console.log(result)
    }

    // Sets the key , value (ie.. newMap.set) 
    add(key, value) {
        // if no key is present, add one
        if (!this.key.includes(key)) {
            // add 'key' to map
            this.key.push(key);
            // add 'value' to map
            this.value.push(value);
        } else {
            let index = this.key.indexOf(key);
            this.value[index] = value;
        }
    }

    // Deletes a given key and value
    remove(key) {
        let index = this.key.indexOf(key);
        this.key.splice(index, 1)
    }

    // retrieve a key/value
    retrieve(key) {
        return this.value[this.key.indexOf(key)];
    }
}

// Testing...

let test = new newMap(); //initialize
// add elements to the map
test.add("Red Wings", "Hockey");
test.add("Lions", "Football");
test.add("Tigers", "Baseball");
test.add("Pistons", "Basketball");

// print the map
test.print();
console.log(); // add space for clarity

// remove
test.remove("Pistons");
test.remove("Lions");
test.print();
console.log(); // add space for clarity

// get a value from calling a key
console.log(test.retrieve("Red Wings"));
console.log(); // add space for clarity

// testing if key is already present 
test.add("Tigers", "Baseball");
test.print();