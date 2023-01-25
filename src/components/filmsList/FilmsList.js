import { useEffect, useState } from "react";

import './FilmsList.css';
import Spinner from "../spinner/Spinner";
import { NavLink } from "react-router-dom";
import Rating from "../rating/Rating";


const FilmsList = ({header, method, process, ...props}) => {
    // const [filmsList, setFilmsList] = useState([]);
    const [MPFilms, setMPFilms] = useState([])
    
    useEffect(() => {
        method()
            .then(res => setMPFilms(res.results))
    }, []);
    
    useEffect(() => {
    }, [process])

    const setContent = (process, Component) => {
        switch(process) {
            case 'confirmed': 
                return <Component />
            case 'loading': 
                if (MPFilms){
                    return <Component />;
                } else return <Spinner />
            default: 
                return 'no way';
        }
    }
    
    const renderItems = (arr) => {
        return arr.map(({title, adult, poster_path, id, vote_average}, i) => {
            return (
                <li key={id} className='films_list_item'>
                        <NavLink to={`/films/${id}`}>
                    <img className='item_poster' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='sdf' />
                    <div className="films_list_item_info">
                        <h4>{title.length > 11 ? `${title.slice(0, 11)}...` : title}</h4>
                        <Rating rate={vote_average} />
                    </div>
                </NavLink>
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
        <>
            <h2 className="list_header">{header}</h2>
            <ul {...props} className="films_list">
                {setContent(process, () => renderItems(MPFilms))}
            </ul>
        </>
    )
}

export default FilmsList;