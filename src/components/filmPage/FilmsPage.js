import { useEffect, useState } from "react";
import AppList from "../appList/AppList";
import Carousel from "../carousel/Carousel";
import FilmsList from "../filmsList/FilmsList";
import RandomFilm from "../randomFilm/RandomFilm";
import Rating from "../rating/Rating";
import useService from "../services/Service";
import './FilmsPage.css';

const FilmsPage = () => {
    const [year, setYear] = useState('2020');
    const {getFilmsForKids, getFilmsByYear, process} = useService();

    return (
        <section className="films_page">
            <Carousel process={process} method={getFilmsForKids} />
            {/* <FilmsList setMethod={setYear} header='Best films of ' method={() => getFilmsByYear(year)} /> */}
            <AppList LClass='films_by_year_list' LIClass='films_by_year_list-item' method={getFilmsByYear} />
            <Rating rate={7.2321} />
            <RandomFilm elemClass='random_film' />
        </section>
    )
}

export default FilmsPage;