import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import './SingleFilmPage.css';
import adult from '../../assets/icons/adult.svg';
import AppButton from '../../components/appButton/AppButton'
import useService from '../../services/Service';
import Spinner from '../../components/spinner/Spinner.js';
import Rating from '../../components/rating/Rating';
import AppInfo from '../../components/appInfo/AppInfo'


const SingleFilmPage = () => {
    const {filmId} = useParams();
    const [film, setFilm] = useState(null);

    const {getSingleFilm, process} = useService();

    const setContent = (process, Component) => {
        switch(process) {
            case 'confirmed':
                return <Component />
            case 'loading':
                return <Spinner />
            case 'error':
                return 'Error occured'
            default:
                return 'Oops'   
        }
    }

    useEffect(() => {
        getSingleFilm(filmId)
            .then(res => setFilm(res))
    }, [])

    const Resctrictions = () => {
        return (
            <img src={adult} alt='18+' />
        )
    }


    const renderFilm = (film) => {
        console.log(film)
        console.log(!![])
        return (
            <>
                <div className="film_sub_info">
                    {film.poster_path ? <img className="poster" src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title} /> : null}
                    <div className="sub_info">
                        <p className="film_tagline">{film.tagline}</p>
                        <Rating style={{padding: '5px'}} rate={film.vote_average} />
                        <p className='vote_count'>{`Votes: ${film.vote_count}`}</p>
                    </div>
                </div>
                <div  className='film_info'>
                    <h3>{film.title.length > 35 ? `${film.title.slice(0, 35)}...` : film.title}{` (${(film.release_date.split('-')[0])})`}</h3>
                    <AppInfo header='Description:' content={film.overview ? film.overview : 'Oops, seems like there is no description for this film...'} />
                    <AppInfo header='Duration: ' content={`${film.runtime >= 60 ? `${Math.floor(film.runtime/60)}h ` : ''}${film.runtime % 60}min`} />
                    {film.production_countries.length !== 0 ? <AppInfo header='Countries:' 
                        content={film.production_countries.map((item, i) => {
                        return `${item.name}${i === film.production_countries.length ? '.' : ''}`}).join(', ')} 
                    /> : null}
                    {film.adult ? <Resctrictions /> : null}
                    <NavLink to='/' >
                        <AppButton  text='Back' buttonClass='elem_button' />
                    </NavLink>
                </div>
            </>
        )
    }

    return (
        <div className="film_container">
            {setContent(process, () => renderFilm(film))}
        </div>
    )
}

export default SingleFilmPage;