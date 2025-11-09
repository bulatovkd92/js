function accum(s) {
	let res = ''

	for (let i = 0; i < s.length; i++) {
		res += s[i].toLowerCase().repeat(i + 1)
		res = res + '-'
	}

	return res
		.split('-')
		.map(function (str) {
			return str.charAt(0).toUpperCase() + str.slice(1)
		})
		.join('-')
		.slice(0, -1)
}
console.log(accum('ZpglnRxqenU')) //"Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }
