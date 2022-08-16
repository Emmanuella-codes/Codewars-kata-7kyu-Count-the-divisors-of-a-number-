// Create a variable to store the count
// use a for loop to count from 1 to the number
// then use an if statement to check the remainder of the numbers
// increment the count (divisors)

function getDivisorsCnt(n){
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count ++
    }
  }
  return count;
}

console.log(getDivisorsCnt(30))    // returns 8
