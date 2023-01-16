import { useEffect, useState } from "react";
import AppButton from "../appButton/AppButton";
import useService from "../services/Service";
import './RandomFilm.css';

const RandomFilm = ({elemClass}) => {
    const [film, setFilm] = useState({});
    const {getSingleFilm} = useService();
    
        useEffect(() => {
            onRequest();
        }, []);

    const onRequest = () => {
        let id = Math.floor(Math.random() * 200000);
        getSingleFilm(id)
            .then(res => setFilm(res))
            .catch(() => onRequest());
    }

    return (
        <div className={elemClass}>
            <img className="elem_poster" src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} />
            <div className='elem_info'>
                <h3>{film.title}</h3>
                <p className='elem_descr'>{film.overview ? film.overview.length > 350 ? `${film.overview.slice(0, 350)}...` : film.overview : 'Oops, seems like there is no description for this film...'}</p>
                <AppButton text='More...' buttonClass='elem_button' />
            </div>
        </div>
    )
}

export default RandomFilm;