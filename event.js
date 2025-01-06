const updateButton = document.getElementById('update_btn');
updateButton.addEventListener('click', () => {
    const movieCode = document.getElementById('movie_name').value.trim();
    if (movieCode) {
        document.getElementById('movie_iframe').src = `https://vidsrc.xyz/embed/movie?imdb=${movieCode}`;
    } else {
        alert('Please enter a valid movie code.');
    }
});
