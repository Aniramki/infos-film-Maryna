
const API_TOKEN = "1c0fb0c274e7d65638afa00e2e29091d";

export function getFilmFromTMdbWidthText(text, page) {

    const url = "https://api.themoviedb.org/3/search/movie?api_key=" + API_TOKEN+
    "&language=fr&query=" + text +'&page=' + page;		


return fetch(url)
.then((response) => response.json())
.catch((error) => console.log(error))
}

