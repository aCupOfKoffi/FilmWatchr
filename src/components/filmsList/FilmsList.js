import { useCallback, useEffect, useState } from "react";
import useService from "../services/Service"
import star from '../../assets/icons/star.svg';
import knife from '../../assets/icons/knife.svg';

import './FilmsList.css';

const setContent = (process) => {

}

const FilmsList = () => {
    const [filmsList, setFilmsList] = useState([]);
    const {clearError, getSingleFilm, process, setProcess} = useService();

    const renderItems = (arr) => {
        console.log(arr)
        return arr.map(({title, adult, poster_path, id, vote_average}, i) => {
            return (
                <li key={id} className='films_list_item'>
                <img className='item_poster' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='sdf' />
                <div className="films_list_item_info">
                    <h2>{title}</h2>
                    <span className="vote-rating">
                        <img className="rating_icon" src={star} alt="star" />
                        <p className="rating_coefficient">{vote_average.toFixed(1)}</p>
                    </span>
                </div>
                <ul className="restrictions_list">
                    <li className="restrictions_list_item">
                        {adult ? <img src={knife} alt="adult" /> : null}
                    </li>
                </ul>
            </li>
            )
        })
    }

    const getRandomFilm = () => {
        const id = Math.floor(Math.random() * 1000);
        console.log(id)
        getSingleFilm(id)
            .then(res => setFilmsList([...filmsList, res]))
            .catch(() => getRandomFilm())
    }



    return (
        <ul className="films_list">
            {renderItems(filmsList)}
            <button onClick={() => getRandomFilm()}>Get more</button>
        </ul>
    )
}

export default FilmsList;