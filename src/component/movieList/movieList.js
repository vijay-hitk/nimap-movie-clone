import React, {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/Card"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()
    const [currentPage , setCurrentPage] = useState(1);
    const [totalPage , setTotalPage] = useState(1);
    const [searchResult , setSearchResult] = useState([]);

    const [search , setSearch] = useState('');
    const [displaySearch , setDisplaySearch] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplaySearch(true);
        console.log('search',searchResult);
    }


    useEffect(() => {
       
      
            getData();
      
    }, [search,displaySearch])

    useEffect(() => {
        getData()
    }, [type,currentPage])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${currentPage}`)
        .then(res => res.json())
        .then(data => {setMovieList(data.results)
                        setTotalPage(data.total_pages)
                        // console.log(totalPage);
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {

    
    const searchMovie = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&query=${search}&page=${currentPage}`)
        .then(res => res.json())
        .then(data => setSearchResult(data.results))
        .catch(error => console.log(error))
    }
    searchMovie();
},[search])

    const prevPage = () => {
        if(currentPage>1){
            setCurrentPage(currentPage-1);

        }
        
    }

    const nextPage = () => {
        if(currentPage < totalPage  ){
            setCurrentPage(currentPage+1);
        }
    }
   

    return (
        <div className="movie__list">
            <div className='search'>
              <form  onSubmit={handleSubmit} >
                <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search"/>
                <button type='submit' className='button'>Search</button>
               </form>
              <button type='submit' className='button' onClick={() => setDisplaySearch(false)}>Show {type} movies</button>
           </div>

            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
            {
                !displaySearch ? 

                
                movieList.map(movie => (
                    <Cards movie={movie} />
                ))


            : 
            searchResult.map(movie => (
                <Cards movie={movie} />
            ))
        }
            
            </div>
                
            <div className="button">
                {currentPage > 1 && (
                    <button className="prevBtn" onClick={prevPage}>Back</button>
                )}
                <p>Page | {currentPage} </p>
                {currentPage < totalPage && (
                    <button className="nextBtn" onClick={nextPage}>Next</button>
                )}
            </div>
        </div>
    )
}

export default MovieList;