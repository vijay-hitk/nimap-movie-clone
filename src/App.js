
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Header from './component/header/Header';
import Home from './pages/home/Home';
import MovieList from './component/movieList/movieList';
import Movie from './pages/movieDetail/Movie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='movie/:id' element={<Movie/>} ></Route>
          <Route path='movies/:type' element={<MovieList/>}></Route>
          <Route path='/*' element></Route>
        </Routes>
      
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
