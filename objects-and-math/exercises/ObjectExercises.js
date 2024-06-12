let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {return Math.floor(Math.random()*10)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {return Math.floor(Math.random()*10)}
};

let chimpanzee = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {return Math.floor(Math.random()*10)}
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {return Math.floor(Math.random()*10)}
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function(){return Math.floor(Math.random()*10)}
};


let crew = [tardigrade, beagle, chimpanzee, salamander, superChimpOne];

function crewReports(animal){
   console.log(animal.name , "is a" , animal.species + ". They are" , animal.age , "years old and" , animal.mass , "kilograms. Their ID is" , animal.astronautID + ".")
}

crewReports(superChimpOne)
crewReports(tardigrade)

for (let i = 0; i < crew.length; i++){
   crewReports(crew[i])
}

function fitnessTest(arr){
   let results = [];
   
   for (let i = 0; i < arr.length; i++){
      let stepsTaken = 0;
      let turnsTaken = 0;
      while(stepsTaken < 20){
         stepsTaken += arr[i].move();
         turnsTaken++
      }
      results.push(`${arr[i].name} took ${turnsTaken} turns to take 20 steps.`);
   }
   return results
}
console.log(fitnessTest(crew))


   // After you have created the other object literals, add the astronautID property to each one.

   // Add a move method to each animal object

   // Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
