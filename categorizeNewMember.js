function openOrSenior(data) {
	const res = []

	for (let i = 0; i < data.length; i++) {
		if (data[i][0] >= 55 && data[i][1] > 7) {
			res.push('Senior')
		} else {
			res.push('Open')
		}
	}

	return res
}

input = [
	[3, 12],
	[55, 1],
	[91, -2],
	[53, 23],
]
output = ['Open', 'Open', 'Open', 'Open']

console.log(openOrSenior(input))

// function openOrSenior(data) {
// 	return data.map(([age, handicap]) =>
// 		age >= 55 && handicap > 7 ? 'Senior' : 'Open'
// 	)
// }

// input = [
// 	[3, 12],
// 	[55, 1],
// 	[91, -2],
// 	[53, 23],
// ]
// output = ['Open', 'Open', 'Open', 'Open']

// console.log(openOrSenior(input))
