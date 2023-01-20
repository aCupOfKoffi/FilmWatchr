import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import star from '../../assets/icons/star.svg';
import useService from "../services/Service";
import Spinner from "../spinner/Spinner";
import Filler from "../filler/Filler";
import './AppList.css';


const AppList = ({LClass, LIClass, process, method, arg, setArg}) => {
    // const [year, setYear] = useState(2020);
    const [list, setList] = useState([]);
    let timer = undefined;

    useEffect(() => {
        onRequest();
    }, [arg]);

    const debounceRequest = (value) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => setArg(value), 1000)
    }

    const onRequest = () => {
        method(arg)
            .then(res => setList(res.results))
            .then(() => timer = undefined);
    }

    const setContent = (process, Component) => {
        switch(process) {
            case 'confirmed':
                return <Component />
            case 'loading':
                return <Spinner />
            default:
                return 'Cant get content'
        }
    }

    const renderItems = (arr) =>{
        return arr.map((item) => {
            return (
                <li key={crypto.randomUUID()} className={`list_item ${LIClass}`}>
                    <NavLink to={`/films/${item.id}`}>
                        {item.poster_path ? <img className="list_image" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} /> : <Filler width='95%' height='68%' content='No poster here' /> }
                        <div className="FBY_list_item_info">
                            <h4>{item.title}</h4>
                            <span className="vote-rating">
                            <img className="rating_icon" src={star} alt="rating" />
                            <p className="rating_coefficient">{item.vote_average.toFixed(1)}</p>
                        </span>
                        </div>
                    </NavLink>
                </li>
            )
    })
    }

    return (
        <section className="list_container">
            <div className='list_header'>
                <h2>Best films of </h2>
                <input onChange={(e) => debounceRequest(e.target.value)} defaultValue={arg} type='number' className="list_input" />
            </div>
            <ul className={`list ${LClass}`}>
                {setContent(process, () => renderItems(list))}
            </ul>
        </section>

    )
}

export default AppList;