function digitalRoot(n) {
	let res = n

	while (res > 9) {
		const arrNum = res.toString().split('')
		res = arrNum.reduce((acc, el) => {
			return acc + Number(el)
		}, 0)
	}

	return res
}

console.log(digitalRoot(16)) //7
console.log(digitalRoot(456)) //6

// function digital_root(n) {
//   if (n < 10) return n;

//   return digital_root(
//     n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
// }
