console.log(' -  * test * - '); 
const API_KEY = '50540b41e66ef631d8d57e13679f9024';
const TRENDING_TIME = 'week';

let mainBtn = document.getElementById('main_btn');
mainBtn.addEventListener('click', Trending);

let searchBtn = document.getElementById('search_btn');
searchBtn.addEventListener('click', Searh);


function Searh() {
    console.log('Search'); 

    // const fetchMovies = async () => {
    //     const response = await fetch('https://api.themoviedb.org/3/' ++ '?api_key=' + API_KEY);
    //     const movies = await response.json();
    //     return movies;
    // };

    // fetchMovies()
    //     .then(movies => {
    //         // console.log('f',movies.results);
    //         localStorage.setItem('currentPageMuvie', JSON.stringify(movies.results));
    //     })
    //     .catch(error => console.log(error));



    Render(localStorage.getItem('currentPageMuvie'));

}

function Trending(){
    console.log('Trending');

    const fetchMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/trending/all/' +
            TRENDING_TIME + '?api_key=' + API_KEY);
        const movies = await response.json();
        return movies;
    };

    fetchMovies()
        .then(movies => {
            // console.log('f',movies.results);
            localStorage.setItem('currentPageMuvie', JSON.stringify(movies.results));
        })
        .catch(error => console.log(error));
    


    Render(localStorage.getItem('currentPageMuvie'));

}


function Render(m) {
    console.log('Render', m);


}



//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

// конкретний фільм 
// https://api.themoviedb.org/3/movie/550?api_key=50540b41e66ef631d8d57e13679f9024