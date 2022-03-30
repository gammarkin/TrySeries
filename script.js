const getElement = (id) => document.getElementById(id);

const searchInput = getElement('floatingInput');
const btnSearch = getElement('btn-search');

const appendSeries = async () => {
	const series = getElement('series');
	const allSeries = await fetchSeries();
	allSeries.forEach((serie) => {
		const div = document.createElement('div');
		div.classList.add('col');
		div.innerHTML = `<div class="col">
                                <div class="card shadow-sm">
                                 <img src="${serie.image
										.medium}" alt="serie-card"  class="bd-placeholder-img card-img-top small" width="100%" height="305">
                                <div class="card-body">
                                        <h5 class="card-title">${serie.name}</h5>
                                            <p class="card-text">${serie.summary}</p>
                                         <strong class="card-text">rating of ${serie.rating.average} out of 10</strong>
                                        <br>
                                        <br>
                                       <a href="${serie.url}" class="btn btn-danger">More</a>
                                    </div>
                                </div>
                             </div>`;
		series.appendChild(div);
	});
};

const searchSeries = async () => {
	const series = getElement('series');
	const allSeries = await fetchSeries();
	const searchInputValue = searchInput.value;
	const filteredSeries = allSeries.filter((serie) => {
		return serie.name.toLowerCase().includes(searchInputValue.toLowerCase());
	});
	series.innerHTML = '';

	filteredSeries.forEach((serie) => {
		const div = document.createElement('div');
		div.classList.add('col');
		div.innerHTML = `<div class="col">
                                <div class="card shadow-sm">
                                    <img src="${serie.image
										.medium}" alt="serie-card"  class="bd-placeholder-img card-img-top small" width="100%" height="305">
                                    <div class="card-body">
                                        <h5 class="card-title">${serie.name}</h5>   
                                        <p class="card-text">${serie.summary}</p>
                                        <strong class="card-text">Rating of ${serie.rating.average} out of 10</strong>
                                        <br>
                                        <br>
                                        <a href="${serie.url}" class="btn btn-danger">More</a>
                                    </div>
                                </div>
                            </div>`;
		series.appendChild(div);
	});
};

btnSearch.addEventListener('click', searchSeries);
searchInput.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		searchSeries();
	}
});

function openNav() {
	document.getElementById('mySidenav').style.width = '250px';
}

function closeNav() {
	document.getElementById('mySidenav').style.width = '0';
}

window.onload = () => {
	appendSeries();
};
