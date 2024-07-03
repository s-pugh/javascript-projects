/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

for (let i = 0; i < 21; i++){
  console.log(i)
}

for (let j = 3; j < 30; j = j+2){
  console.log(j);
}

for (let k = 12; k > -15; k = k-2){
  console.log(k)
}

for (let l = 50; l > 20; l--){

  if (0 === (l % 3)){
    console.log(l)
  }
}

//*Exercise #2: 
//Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

let one = "LaunchCode";
let two = [1, 5, 'LC101', 'blue', 42];
console.log(one);
console.log(two);

//Construct ``for`` loops to accomplish the following tasks:
 // a. Print each element of the array to a new line.
  //b. Print each character of the string - in reverse order - to a new line. */ 

for (let i =  0; i < two.length; i++){
  console.log(two[i]);
}


for (let j = 9; j >= 0; j--){
console.log(one[j]);
}



/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
let even = []
let odd = []
  let three = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]
  for (k = 0; k < three.length; k++){
    if (three[k] % 2 === 0){
      even.splice(0, 0, three[k])
    } else if (three[k] % 2 === 1) {
      odd.splice(0, 0, three[k])
    }
  }
  console.log(even);
  console.log(odd);