//Construct a for loop that combines two strings together, alternating the characters from each source.  Print the result.

//Example: If string = “1234” and otherString = “5678”, then the output will be “15263748”.

//For now, make sure the two strings contain the same number of characters!

let rutabagas = 'Rutabagas';
let chemistry = 'Chemistry';
let mix = ""

for(let i = 0; i < rutabagas.length; i++) {
  mix += rutabagas[i] + chemistry[i]
}
console.log(mix)