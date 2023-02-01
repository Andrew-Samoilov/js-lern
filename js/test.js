console.log(' -  * test * - '); 

let mainBtn = document.getElementById('main_btn');
mainBtn.addEventListener('click', Load);

const API_KEY = '50540b41e66ef631d8d57e13679f9024';
const TRENDING_TIME = 'week';

function Load(){
    console.log('clickBtn');

    const fetchMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/trending/all/' +
            TRENDING_TIME + '?api_key=' + API_KEY);
        const movies = await response.json();
        return movies;
    };

    fetchMovies()
        .then(movies => {
            console.log(movies.results);
            localStorage.setItem('currentPageMuvie', JSON.stringify(movies.results));
        })
        .catch(error => console.log(error));

}

//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

// конкретний фільм 
// https://api.themoviedb.org/3/movie/550?api_key=50540b41e66ef631d8d57e13679f9024