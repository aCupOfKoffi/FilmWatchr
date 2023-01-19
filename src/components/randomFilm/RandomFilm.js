import { useEffect, useState } from "react";
import AppButton from "../appButton/AppButton";
import Rating from "../rating/Rating";
import useService from "../services/Service";
import Spinner from "../spinner/Spinner";
import './RandomFilm.css';

const RandomFilm = ({elemClass}) => {
    const [film, setFilm] = useState({});
    const [imgLoaded, setImgLoaded] = useState(false);
    const {getSingleFilm, process} = useService();
    
        useEffect(() => {
            onRequest();
        }, []);

    const onRequest = () => {
        let id = Math.floor(Math.random() * 200000);
        getSingleFilm(id)
            .then(setImgLoaded(false))
            .then(res => setFilm(res))
            .catch(() => onRequest());
    }

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

    const renderItem = (film) => {
        return (
            <>
                {film.poster_path ? <img onLoad={() => setImgLoaded(true)} className="elem_poster" src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} /> : null}
                <div style={{visibility: !imgLoaded && film.poster_path ? 'hidden' : 'visible'}} className='elem_info'>
                    <h3>{film.title.length > 25 ? `${film.title.slice(0, 25)}...` : film.title}</h3>
                    <p className='elem_descr'>{film.overview ? film.overview.length > 350 ? `${film.overview.slice(0, 350)}...` : film.overview : 'Oops, seems like there is no description for this film...'}</p>
                    <Rating rate={film.vote_average} />
                    <AppButton text='More...' buttonClass='elem_button' />
                    <AppButton text='Other film' onClick={() => onRequest()} buttonClass='elem_button' />
                </div>
            </>
        )
    }

    return (
        <div className={elemClass}>
            {setContent(process, () => renderItem(film))}
        </div>
    )
}

export default RandomFilm;