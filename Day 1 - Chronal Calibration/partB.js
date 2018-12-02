const calibrationB = inputArray => {
	let frequencySum = 0;
	const foundFrequencies = [];
	let found;

	while (!found) {
		for (const frequency of inputArray) {
			frequencySum += +frequency;
			if (foundFrequencies.includes(frequencySum)) {
				found = true;
				return foundFrequencies[foundFrequencies.length - 1] + +frequency;
			} else foundFrequencies.push(frequencySum);
		}
	}
};

module.exports = calibrationB;
