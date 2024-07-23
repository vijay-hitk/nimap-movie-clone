import React, {useEffect, useState} from "react"
import "./Movie.css"
import { useParams } from "react-router-dom"


const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const [cast , setCast] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        getData()
        getCast()
       
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
        .catch(error => console.log(error))
        console.log(currentMovieDetail);
    }

    const getCast =() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setCast(data.cast ))
        .catch(error => console.log(error))
        console.log(cast);

    }

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                  
                </div>
               
               
            </div>
            
          

                            
            <div className="cast_title">
            <p>Cast</p>
            </div>
          
    
           <div className="cast">
           
                           {cast.map((list) => (
                            <>
                                <div className="cast_card">
                             <img src={`https://image.tmdb.org/t/p/w500${list.profile_path}`} />
                             <p>{list.name}</p>
                             <p>Character:{list.character}</p>
                             </div>
                               
                             </>
                             

                           ))}
             </div>                       



          
       
           
        </div>
    )
}

export default Movie