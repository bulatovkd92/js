function solution(string) {
	let res = ''

	if (!string) return ''

	for (let i = 0; i < string.length; i++) {
		if (string[i] == string[i].toUpperCase()) {
			res += ' '
		}
		res += string[i]
	}
	return res
}

console.log(solution('camelCase'))

// function solution(string) {
// 	string = string.split('').map(function (el) {
// 		if (el === el.toUpperCase()) {
// 			el = ' ' + el
// 		}
// 		return el
// 	})
// 	return string.join('')
// }
