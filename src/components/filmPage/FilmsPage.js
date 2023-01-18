import { useEffect } from "react";
import Carousel from "../carousel/Carousel";
import FilmsList from "../filmsList/FilmsList";
import RandomFilm from "../randomFilm/RandomFilm";
import useService from "../services/Service";
import './FilmsPage.css';

const FilmsPage = () => {
    const {getFilmsForKids, process} = useService();
    return (
        <section className="films_page">
            <Carousel process={process} method={getFilmsForKids} />
            <RandomFilm elemClass='random_film' />
        </section>
    )
}

export default FilmsPage;