import { useCallback, useEffect, useState } from "react";
import useService from "../services/Service"
import star from '../../assets/icons/star.svg';
import knife from '../../assets/icons/knife.svg';

import './FilmsList.css';


const FilmsList = ({length = 5, ...props}) => {
    // const [filmsList, setFilmsList] = useState([]);
    const [MPFilms, setMPFilms] = useState([])
    const {clearError, getSingleFilm, process, setProcess, getMostPopular} = useService();
    
    useEffect(() => {
        getMostPopular()
            .then(res => setMPFilms(res.results))
    }, []);
    
    const renderItems = (arr) => {
        return arr.map(({title, adult, poster_path, id, vote_average}, i) => {
            return (
                <li key={id} className='films_list_item'>
                <img className='item_poster' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='sdf' />
                <div className="films_list_item_info">
                    <h2>{title.length > 12 ? `${title.slice(0, 12)}...` : title}</h2>
                    <span className="vote-rating">
                        <img className="rating_icon" src={star} alt="star" />
                        <p className="rating_coefficient">{vote_average.toFixed(1)}</p>
                    </span>
                </div>
            </li>
            )
        })
    }

    // const getRandomFilm = () => {
    //     const id = Math.floor(Math.random() * 1000);
    //     console.log(id)
    //     getSingleFilm(id)
    //         .then(res => setFilmsList([...filmsList, res]))
    //         .catch(() => getRandomFilm())
    // }



    return (
        <ul {...props} className="films_list">
            {renderItems(MPFilms)}
        </ul>
    )
}

export default FilmsList;