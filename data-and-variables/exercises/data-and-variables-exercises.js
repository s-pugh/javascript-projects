// Declare and assign the variables below
let name = "Determination";
let speed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
let mpk =0.621
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(name))
console.log(typeof(speed))
console.log(typeof(distanceToMars))
console.log(typeof(distanceToMoon))
console.log(typeof(mpk))
// Calculate a space mission below
let milesToMars = (distanceToMars*mpk)
console.log(milesToMars)
let hoursToMars = (milesToMars/speed)
console.log(hoursToMars)
let daysToMars = (hoursToMars/24)
console.log(daysToMars)

// Print the results of the space mission calculations below
console.log(name + " will take " + daysToMars + " days to reach Mars.")
// Calculate a trip to the moon below
let milesToMoon = (distanceToMoon*mpk)
console.log (milesToMoon)
let hoursToMoon = (milesToMoon/speed)
console.log (hoursToMoon)
let daysToMoon = (hoursToMoon/24)
console.log (daysToMoon)

// Print the results of the trip to the moon below
console.log(name + " will take " + daysToMoon + " days to reaach the Moon.")