async function fetchMovieDetails(movieCode) {
    const response = await fetch(`https://www.omdbapi.com/?i=${movieCode}&apikey=YOUR_API_KEY`);
    const data = await response.json();

    if (data.Response === "True") {
        document.getElementById('movie_iframe').src = `https://vidsrc.xyz/embed/movie?imdb=${movieCode}`;
        alert(`Loaded: ${data.Title}`);
    } else {
        alert('Movie not found!');
    }
}

document.getElementById('update_btn').addEventListener('click', () => {
    const movieCode = document.getElementById('movie_name').value.trim();
    if (movieCode) {
        fetchMovieDetails(movieCode);
    } else {
        alert('Please enter a valid movie code.');
    }
});
