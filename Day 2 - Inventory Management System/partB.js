const findBoxes = inputArray => {
	let candidate = [];

	for (let i = 0; i < inputArray.length; i++) {
		for (let j = i + 1; j < inputArray.length; j++) {
			let can = inputArray[i];
			let t = inputArray[j];
			let diff = 0;
			let index = -1;
			for (let k = 0; k < can.length; k++) {
				if (can[k] !== t[k]) {
					diff++;
					index = k;
					if (diff > 1) break;
				}
			}
			if (diff === 1) {
				candidate.push(can);
				candidate.push(t);
				candidate.push(index);
			}
		}
	}
	let result = candidate[0].split('');
	result.splice(candidate[2], 1);
	return result.join('');
};

module.exports = findBoxes;
