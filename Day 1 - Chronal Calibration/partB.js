const calibrationB = inputArray => {
	let frequencySum = 0;
	const foundFrequencies = {};
	let found;

	while (!found) {
		for (const frequency of inputArray) {
			frequencySum += +frequency;
			if (foundFrequencies[frequencySum]) {
				found = true;
				return frequencySum;
			} else foundFrequencies[frequencySum] = true;
		}
	}
};

module.exports = calibrationB;
