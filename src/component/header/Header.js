import React ,{useEffect, useState} from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    // const [search , setSearch] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log('search',search);

    // }

  return (
    <div className='header'>
        <div className='headerLeft'>
            <Link to='/'>Movie DB</Link>
            <Link to='movies/popular'>Popular</Link>
            <Link to='movies/top_rated'>Top Rated</Link>
            <Link to='movies/upcoming'>Upcoming</Link>
        </div>
        {/* <div className='headerRight'>
             <form onSubmit={handleSubmit}>
                <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type='submit' >Search</button>
            </form>
        </div> */}
    </div>
  )
}

export default Header