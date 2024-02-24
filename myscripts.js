 //Questions 1
 //part A
let ages=[3,9,23,64,2,8,28,93]
console.log(ages)
 //part A (Index the start of the array minus index the end of array, dont matter how many slots are in the array)
console.log(ages[0] - ages[ages.length -1])
//part B (Added an element in to the array using the push funcation which slotted at the end of the array)
ages.push(26)
console.log(ages)
console.log(ages[0] - ages[ages.length -1])
//part C (used an for loop to go through the array and add them up in the sum const then divied by the length of the array to find the average)
function averageFunction(array){

    let sum = 0;
    for(let i = 0; i < array.length; i++) 
  sum += array[i];
    let average = sum / array.length;
    console.log(average)
}
averageFunction(ages)


//Question 2
let names=['Sam','Tommy','Tim','Sally','Bob']
console.log(names)
//part 2 (for loop that 1 goes to each name in the array but also finds the length of each element in the array to get and add up the total amount of letters)
function averageletters(array){
  let sumOfLetters = 0;
  for (let i = 0; i < array.length; i++) {
      sumOfLetters += array[i].length;
  }
  console.log(sumOfLetters/names.length);
}
averageletters(names)
//part 3
let stringOfNames = "";
for (let i = 0; i < names.length; i++) {
    stringOfNames += names[i] + " ";
}
console.log(stringOfNames);

//Question 3
console.log("Question 3:To acces the last element of an array us array.length[-1] this takes the length of the array then minus 1 to accces the last elements becauser arary slots start counting at 0")

//Question 4 
console.log("Question 4: To access the first element in array us array[0] because array slots start counting from 0")

//Question 5 (used a smilier loop has the avg letter loop but rather then adding them up, I used a push function to creat a new array) 
const nameLength =[]
for(let i =0;i<names.length;i++){
  nameLength.push(names[i].length)
}
console.log(nameLength)

//Question 6
function sumFunction(array){

    let sum = 0;
    for(let i = 0; i < array.length; i++) 
  sum += array[i];
    console.log(sum)
}
sumFunction(nameLength)

//Question 7 (used the array method .repeat to repreat any string x amount of times)
function wordMulti(word,n){
  return word.repeat(n);
}
console.log(wordMulti("Hello",3))

//Question 8 (2 parameters joined together)
function fullName(par1,par2){
  return (par1 + " " + par2)
}
console.log(fullName('Deion','Pope'))


//Question 9 (used the a for loop to sum up an array than compared it to 100)
let numberGroupOne = [10,30,40,50]


function greaterThan(array){
  let sum = 0;
  for(let i = 0; i < array.length; i++) 
sum += array[i];
  let total = sum > 100;
  console.log(total)
}
greaterThan(numberGroupOne)

//Question 10 USED THE SAME ARRAYS HAS QUESTION 9
function averageFunction(array){

  let sum = 0;
  for(let i = 0; i < array.length; i++) 
sum += array[i];
  let average = sum / array.length;
  console.log(average)
}

averageFunction(numberGroupOne)

//Question 11 !! NEED HELP !!( added to for loops to get the sum from 2 arrays than compared at the end)
let n1=[10,20,30,40,50]
let n2=[1,2,3,4,5,6]

function twoArray(a,b){
  let sumOne = 0;
  for(let i = 0; i < a.length; i++) 
sumOne += a[i];
  let averageOne = sumOne / a.length;


  let sumTwo = 0;
  for(let i = 0; i < b.length; i++) 
sumTwo += b[i];
  let averageTwo = sumTwo / b.length;

  let total = sumOne > sumTwo
  console.log(total)
}
console.log(twoArray(n1,n2))


//Question 12 (if else statement with an & to makes sure both statments gets read if the first one is true)
function willBuyDrink(isHotoutside,moneyInPocket){
  if(isHotoutside == true && moneyInPocket >= 10.50){
    return true
  }
  else{
    return false
  }
}

console.log(willBuyDrink(true,11))

//Question 13 
function costOFProjectInPd(a){
  let sum=0 
  for(let i = 0;i<a.length; i++)
  sum += a[i]
  let pounds = sum*.79
  return pounds
}
console.log(costOFProjectInPd([1559,5699,253,7895]))
