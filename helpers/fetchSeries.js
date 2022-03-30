const fetchSeries = async () => {
	const url = 'https://api.tvmaze.com/shows';
	// Seu código aqui
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
};

if (typeof module !== 'undefined') {
	module.exports = {
		fetchSeries
	};
}
