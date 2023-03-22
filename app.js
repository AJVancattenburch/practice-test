const ageToVote = 18

const user = {
  name: 'Sherlock Holmes',
  address: {
    street: '221B Baker Street',
    city: 'London'
  }
}

const cases = [
  { title: 'The Hound of the Baskervilles', releaseYear: 1901 },
  { title: 'The Adventure of the Empty House', releaseYear: 1903 },
  { title: 'The Adventure of the Norwood Builder', releaseYear: 1903 },
  { title: 'The Adventure of the Dancing Men', releaseYear: 1903 },
  { title: 'The Adventure of the Solitary Cyclist', releaseYear: 1904 },
]


//2. **Creating and using variables in JavaScript**

let currentYear = 2023
let jsReleaseYear = 1995
let jsAge = currentYear - jsReleaseYear
  console.log(jsAge)

  if (ageToVote >= jsAge)
  console.log('Javascript is too young to vote')
    else(
      console.log('Javascript is old enough to vote')
    )


//3. **Creating and using Loops in JavaScript**

for(let i = 0; i <= 100; i ++){
  console.log(i)
}

console.log('Starting')
for(let i = 0; i <= 100; i += 10){
  console.log(i)
  if(i == 50)
  console.log('halfway')
  if(i === 100)
  console.log('Finished')

}


//4. **Accessing properties on an object in JavaScript**

console.log(user.name, 'lives at ', user.address)


//5. **Working with an array of objects in JavaScript**


for(let i = 0; i <= cases.length; i++){
  let eachCase = cases[i]
  if(eachCase.releaseYear == 1903)
  console.log(cases[i])
}