const partA = require('./partA');

const singleClaim = claimEntries => {
	let claimSheet = {};
	let claimsObj = {};
	partA(claimEntries, claimSheet, claimsObj);

	let claims = Object.keys(claimsObj);
	for (let i = 0; i < claims.length; i++) {
		const claimID = claims[i];
		const { W, H, X, Y } = claimsObj[claimID];

		let isTheOne = true; //over-optimistic

		for (let i = 0; i < W; i++) {
			let x = X + i;

			for (let j = 0; j < H; j++) {
				let y = Y + j;
				if (claimSheet[`${x}-${y}`] != 1) {
					isTheOne = false;
					break;
				}
			}
		}

		if (isTheOne) {
			return claimID;
		}
	}
};

module.exports = singleClaim;
