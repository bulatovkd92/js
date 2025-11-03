function solution(str, ending) {
	return str.endsWith(ending)
}

console.log(solution('abcde', 'cde'))

//доп

// function solution(str, ending) {
// 	return str.slice(str.length - ending.length) === ending
// }

// function solution(str, ending) {
// 	if (typeof str != 'string' || typeof ending != 'string') throw 'wrong type'
// 	if (ending.length > str.length) return false
// 	return str.substr(str.length - ending.length, ending.length) == ending
// }

// function solution(str, ending) {
// 	let strArray = str.split('')
// 	let endArray = ending.split('')
// 	let wasteArrayLength = strArray.length - endArray.length
// 	let newArray = []

// 	for (let i = wasteArrayLength; i < strArray.length; i++) {
// 		newArray.push(strArray[i])
// 	}

// 	let newEnding = endArray.join()
// 	let newString = newArray.join()

// 	if (newString == newEnding) {
// 		return true
// 	} else {
// 		return false
// 	}
// }
