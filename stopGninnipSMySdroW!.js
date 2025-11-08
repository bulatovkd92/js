function spinWords(string) {
	let res = []
	const arrStr = string.split(' ')

	for (let i = 0; i < arrStr.length; i++) {
		if (arrStr[i].length >= 5) {
			res.push(arrStr[i].split('').reverse().join(''))
		} else {
			res.push(arrStr[i])
		}
	}
	return res.join(' ')
}

console.log(spinWords('Hey fellow warriors')) //"Hey wollef sroirraw"
console.log(spinWords('This is a test')) //"This is a test"
console.log(spinWords('This is another test')) //"This is rehtona test"

// function spinWords(words){
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }
