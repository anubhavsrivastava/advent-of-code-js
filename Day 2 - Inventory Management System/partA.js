const countBoxes = inputArray => {
	let counts = { '3': 0, '2': 0 };
	inputArray.forEach(element => {
		let mapper = {};
		for (let c of element) {
			mapper[c] = mapper[c] || 0;
			mapper[c]++;
		}
		let tf = false;
		let threef = false;
		Object.keys(mapper).forEach(k => {
			if (!tf && mapper[k] === 2) {
				counts[2] += 1;
				tf = true;
			}
			if (!threef && mapper[k] === 3) {
				counts[3] += 1;
				threef = true;
			}
		});
	});

	return counts['3'] ? counts['3'] * (counts['2'] ? counts['2'] : 1) : counts['2'];
};

module.exports = countBoxes;
