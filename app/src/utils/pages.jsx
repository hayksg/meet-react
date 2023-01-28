export const getPageCount = (totalCount, limit) => {
	return Math.ceil(totalCount / limit);
};

export const pagesArray = (total) => {
	let pages = [];

	for (let i = 0; i < total; i++) {
		pages.push(i + 1);
	}

	return pages;
};
