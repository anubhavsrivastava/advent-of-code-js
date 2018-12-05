const claimSuit = (claimEntries, claimSheet = {}, claimsFiltered = {}) => {
	let counter = {};

	claimEntries.forEach(item => {
		const matches = item.trim().match(/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/);

		const claimID = +matches[1];
		const X = +matches[2];
		const Y = +matches[3];
		const W = +matches[4];
		const H = +matches[5];

		claimsFiltered[claimID] = { X, Y, W, H };
		for (let i = 0; i < W; i++) {
			let x = X + i;

			for (let j = 0; j < H; j++) {
				let y = Y + j;
				let id = `${x}-${y}`;
				claimSheet[id] = claimSheet[id] === undefined ? 0 : claimSheet[id];
				counter[claimSheet[id]] = counter[claimSheet[id]] || 0;
				counter[claimSheet[id]] -= 1;
				claimSheet[id] += 1;
				counter[claimSheet[id]] = counter[claimSheet[id]] || 0;
				counter[claimSheet[id]] += 1;
			}
		}
	});
	// console.log(counter);
	delete counter['0']; // this count is total number of individual sq inch
	delete counter['1'];
	return Object.values(counter).reduce((acc, cur) => acc + cur, 0);
};

module.exports = claimSuit;
