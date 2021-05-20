import React from 'react';
import { Link } from 'react-router-dom';

const FavoriteMovieList = (props) => {
    const { favoriteMovies, deleteFavorites } = props;

    //const favorite = favoriteMovies.find(movie=>movie.name != movie.name)
    //const favorite = 

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favoriteMovies.map(movie=>{
                return <Link key={movie.id} className="btn btn-light savedButton" to={`/movies/${movie.id}`}>{movie.title} 
                <span><span onClick={() => deleteFavorites(movie.id)} className="material-icons">remove_circle</span></span>
                </Link>
            })
        }
    </div>);
}

export default FavoriteMovieList;