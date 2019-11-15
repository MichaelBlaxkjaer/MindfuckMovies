"use strict";

// Starting URL-string from The Open Movie Database API
let url = "http://www.omdbapi.com/?i=";

// My API key as URL-string
let apiKey = "&apikey=7332446b"

// Movie ID's from IMDb.com as strings
let movieId1 = "tt1130884" // Shutter Island
let movieId2 = "tt0167404" // The Sixth Sense
let movieId3 = "tt0114814" // The Usual Suspects
let movieId4 = "tt0137523" // Fight Club
let movieId5 = "tt0443543" // The Illusionist
let movieId6 = "tt0144084" // American Psycho
let movieId7 = "tt0114369" // Seven
let movieId8 = "tt0482571" // The Prestige
let movieId9 = "tt0246578" // Donnie Darko
let movieId10 = "tt0361862" // The Machinist
let movieId11 = "tt0117381" // Primal Fear

/* Async Function (Async to prevent it from blocking other Javascript code while running) for fetching movies from omdbapi.com */
async function fetchMovies() {
	try {
		// Promise.all() gathers multiple promises into a single super-promise
		var data = await Promise.all([
		// Parse each response as json
		fetch(url + movieId1 + apiKey).then((response) => response.json()),
		fetch(url + movieId2 + apiKey).then((response) => response.json()),
		fetch(url + movieId3 + apiKey).then((response) => response.json()),
		fetch(url + movieId4 + apiKey).then((response) => response.json()),
		fetch(url + movieId5 + apiKey).then((response) => response.json()),
		fetch(url + movieId6 + apiKey).then((response) => response.json()),
		fetch(url + movieId7 + apiKey).then((response) => response.json()),
		fetch(url + movieId8 + apiKey).then((response) => response.json()),
		fetch(url + movieId9 + apiKey).then((response) => response.json()),
		fetch(url + movieId10 + apiKey).then((response) => response.json()),
		fetch(url + movieId11 + apiKey).then((response) => response.json()),
      ])
                .then(movies => {
                    let output = '';
                    output += '<div>';
                    movies.forEach(function(movie) {
                        output += `
                            <section class="movies">
                                <h2 class="title-mobile">${movie.Title}</h2> 
								<article class="image-box">
									<a href="#">
										<img src="${movie.Poster}" alt="${movie.Title}" />
									</a>
								</article>
								<article class="info-box">
									<h2 class="title-wide">${movie.Title}</h2>
									<p><strong>Director: </strong>${movie.Director}</p>
									<p><strong>Released: </strong>${movie.Released}</p>
									<p><strong>Length: </strong>${movie.Runtime}</p>
									<p><strong>IMDb Rating: </strong>${movie.imdbRating}</p>
									<p><strong>Plot: </strong>${movie.Plot}</p>
									
                                	
                            
								</article>
								<div class="lol"></div>
                            </section>
                        `;
                    });
                    output += '</div>'
                    document.getElementById("test").innerHTML = output;
                });
    } catch (error) {
      console.log(error);
    }
  }

// Run the function
fetchMovies()







function fetchYoutube() {
	try {
		var data = Promise.all([
			fetch('https://noembed.com/embed?url=http://www.youtube.com/watch?v=5iaYLCiq5RM').then((response) => response.json()),
			fetch('https://noembed.com/embed?url=http://www.youtube.com/watch?v=VG9AGf66tXM').then((response) => response.json()),
			fetch('https://noembed.com/embed?url=http://www.youtube.com/watch?v=oiXdPolca5w').then((response) => response.json()),
			fetch('https://noembed.com/embed?url=http://www.youtube.com/watch?v=qtRKdVHc-cE').then((response) => response.json()),
			fetch('https://noembed.com/embed?url=http://www.youtube.com/watch?v=i0xO64icGSY').then((response) => response.json()),
			fetch('https://noembed.com/embed?url=http://www.youtube.com/watch?v=5YnGhW4UEhc').then((response) => response.json()),
			fetch('https://noembed.com/embed?url=http://www.youtube.com/watch?v=znmZoVkCjpI').then((response) => response.json()),
			fetch('https://noembed.com/embed?url=http://www.youtube.com/watch?v=ijXruSzfGEc').then((response) => response.json()),
			fetch('https://noembed.com/embed?url=http://www.youtube.com/watch?v=i0xO64icGSY').then((response) => response.json()),
			fetch('https://noembed.com/embed?url=http://www.youtube.com/watch?v=i0xO64icGSY').then((response) => response.json()),
			fetch('https://noembed.com/embed?url=http://www.youtube.com/watch?v=i0xO64icGSY').then((response) => response.json())
			
			
      ])
                .then(youtube => {
                    const lols = document.querySelectorAll('.lol');
					
					for (let i = 0; i < youtube.length; i++) {
    					lols[i].innerHTML = `
							<div>
								${youtube[i].html}
							</div>
    `;
}
					
                });
    } catch (error) {
      console.log(error);
    }
  }
fetchYoutube()
















       
