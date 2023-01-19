import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import star from '../../assets/icons/star.svg';
import useService from "../services/Service";
import './AppList.css';


const AppList = ({LClass, LIClass, method}) => {
    const [year, setYear] = useState(2020);
    const [list, setList] = useState([]);


    useEffect(() => {
        // onRequest();
    }, []);

    useEffect(() => {
        console.log(year);
    }, [year])

    const onRequest = () => {
        method(year)
            .then(res => setList(res.results))
    }

    const renderItems = (arr) =>{
        // console.log(arr)
        return arr.map((item) => {
            return (
                <li key={crypto.randomUUID()} className={`list_item ${LIClass}`}>
                    <NavLink to={`/films/${item.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
                        <div className="FBY_list_item_info">
                            <h4>{item.title}</h4>
                            <span className="vote-rating">
                            <img className="rating_icon" src={star} alt="star" />
                            <p className="rating_coefficient">{item.vote_average.toFixed(1)}</p>
                        </span>
                        </div>
                    </NavLink>
                </li>
            )
    })
    }

    const elements = renderItems(list);
    return (
        <section className="list">
            <div className='list_header'>
                <h2>Best films of </h2>
                <input onChange={(e) => console.log(e.target.value)} defaultValue={2020} type='number' className="list_input" />
            </div>
            <ul className={`item_list ${LClass}`}>
                {elements}
            </ul>
        </section>

    )
}

export default AppList;