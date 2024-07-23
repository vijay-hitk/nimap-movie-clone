import React, { useEffect ,useState} from 'react'
import MovieList from '../../component/movieList/movieList';
import './Home.css';

const Home = () => {
    const [popularMovies , setPopularMovies] = useState();
    
    
    useEffect(() =>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1')
        .then(res=> res.json())
        .then(data => setPopularMovies(data.results))
        .catch(error => console.log(error))
    })


  return (

    <>
        
     <div><MovieList/></div>
    </>

   
  )
}

export default Home