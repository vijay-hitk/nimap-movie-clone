import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom';

const CastList = () => {

const [castList , setCastList] = useState([]);
const {id} = useParams();

useEffect(() => {
    getData();
},[id]);


const getData = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
    .then(res => res.json())
    .then(data => setCastList(data.cast.cast));

    console.log(castList);

   

}


  return (
    <div>
       
            <>
            <div className="cards">
            <img className="cards__img" src={`https://image.tmdb.org/t/p/w500${castList? castList.profile_path :''}`} />
            <div className="cards__overlay">
                {/* <div className="card__title">{castList?list.name:''}</div> */}
                <div className="card__runtime">
                    {/* {castList ? list.character:''} */}
                </div>
                
            </div>
        </div>
        </>


       
        



    </div>
  )
}

export default CastList