// 1. Create a constructor FUNCTION for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber, and favoriteFoods 
function Person (firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = favoriteFoods;
    // 4. Add a property on the Person object called family which is an empty array.
    this.family = [];
}

Person.prototype = {
    // 2. Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    // 3. Overwrite the toString method from the Object prototype by creating a toString method for Person.
    toString: function() {
        return `${this.fullName()}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
    },
    // 5. Add a function on the Person.prototype called addToFamily which adds an object from the Person constructor to the family array.
    addToFamily: function(familyMember) {
        // Checks to see that the familyMember is both an object created by the Person constructor and not already present in the family array.
        if (familyMember instanceof Person && this.family.includes(familyMember) == false) {
        this.family.push(familyMember);
        // This method should return the length of the family array
        console.log(`${familyMember.fullName()} added to family. Current number of family members is ${this.family.length}.`)
        }
        // Message appears if familyMember was not an object constructed from the Person constructor
        else if (familyMember instanceof Person == false) {
            console.log(`${familyMember} is not a person!`);
        }
        // Message appears if familyMember already exists in the family array
        else if (this.family.includes(familyMember)) {
            console.log(`${familyMember.fullName()} is a duplicate entry!`)
        }
    }
}

// Adding myself as a person

let nick = new Person("Nick", "Calabrese", "Gray", 79, ["pizza", "sushi", "tacos"])

// Creating additional persons to be used as family members
let john = new Person("John", "Doe", "Blurple", 14, ["cookies", "smaller cookies"] )

let lorraine = new Person("Lorraine", "Lorrainson", "Green", 22, ["chocolate", "steak", "red wine"])

// Tests fullName method for #2
console.log(nick.fullName());

// Tests toString method for #3
console.log(nick.toString());

// Testing addFamily method for #5
// Adding two new (valid) family members
nick.addToFamily(john);
nick.addToFamily(lorraine);

// Testing the addition of a duplicate family member
nick.addToFamily(john);

// Testing the addition of a family member that was not created using the Person constructor
let steve = "Good ol' Uncle Steve"
nick.addToFamily(steve);

// Logging myself to see my added family members
console.log(nick);