export const _add = (a, b) => {
	return a + b;
};

export const _divide = (a, b) => {
	if (b === 0) {
		throw new Error("ZeroDivisionError");
	}
	return a / b;
};
