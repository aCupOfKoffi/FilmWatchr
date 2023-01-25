import { useEffect, useState } from "react";
import AppList from "../../components/appList/AppList";
import Carousel from "../../components/carousel/Carousel";
import RandomFilm from "../../components/randomFilm/RandomFilm";
import useService from '../../services/Service';
import './FilmsPage.css';

const FilmsPage = () => {
    const [year, setYear] = useState('2020');
    const {getFilmsForKids, getFilmsByYear, process} = useService();

    return (
        <section className="films_page">
            <Carousel process={process} method={getFilmsForKids} />
            {/* <FilmsList setMethod={setYear} header='Best films of ' method={() => getFilmsByYear(year)} /> */}
            <AppList LClass='films_by_year_list' LIClass='films_by_year_list-item' process={process} method={(year) => getFilmsByYear(year)} arg={year} setArg={setYear} />
            <RandomFilm elemClass='random_film' />
        </section>
    )
}

export default FilmsPage;