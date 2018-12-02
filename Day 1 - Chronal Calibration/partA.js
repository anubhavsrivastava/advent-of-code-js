const calibration = inputArray => {
	return inputArray.reduce((a, b) => +a + +b, 0);
};

module.exports = calibration;
