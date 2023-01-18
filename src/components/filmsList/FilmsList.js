import { useCallback, useEffect, useState } from "react";
import useService from "../services/Service"
import star from '../../assets/icons/star.svg';
import knife from '../../assets/icons/knife.svg';

import './FilmsList.css';
import Spinner from "../spinner/Spinner";


const FilmsList = ({length = 5, method, process, ...props}) => {
    // const [filmsList, setFilmsList] = useState([]);
    const [MPFilms, setMPFilms] = useState([])
    
    useEffect(() => {
        method()
            .then(res => setMPFilms(res.results))
    }, []);
    
    useEffect(() => {
        console.log(process);
    }, [process])

    const setContent = (process, Component) => {
        switch(process) {
            case 'confirmed': 
                return <Component />
            case 'loading': 
                return <Spinner />
            default: 
                return 'no way';
        }
    }
    
    const renderItems = (arr) => {
        return arr.map(({title, adult, poster_path, id, vote_average}, i) => {
            return (
                <li key={id} className='films_list_item'>
                <img className='item_poster' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='sdf' />
                <div className="films_list_item_info">
                    <h2>{title.length > 11 ? `${title.slice(0, 11)}...` : title}</h2>
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
            {setContent(process, () => renderItems(MPFilms))}
        </ul>
    )
}

export default FilmsList;