import { useParams } from "react-router-dom";
import './List.css';
import Film from "../Film/Film";
import { useEffect, useState } from "react";
import { getFilmFromTMdbWidthText } from "../TMDB/TMDBApi";
import '../TMDB/TMDBApi';

function List() {
    const search = useParams()

    useEffect(() => {
        getFilmFromTMdbWidthText(search.data, 1)
        .then(data =>{setFilms(data.results)})
    }
    )
   
    const [films, setFilms] = useState([])

    return (
        <div className="container">
            <h2>Liste des films</h2>
            <p>{search.data}</p>
            {films.map((film) => {
                return (
                    <Film key={film.id} poster={film.poster_path}
                    abstract={film.overview} />
                )
            })}
        </div>
    )
}

export default List;
