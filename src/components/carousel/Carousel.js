import { useEffect, useState } from "react";
import AppButton from "../appButton/AppButton"
import FilmsList from "../filmsList/FilmsList";
import './Carousel.css';

const Carousel = () => {
    const [position, setPosition] = useState(0);
    const [length, setLength] = useState(0);

    const changePos = (pos, vector) => {
        const width = document.querySelector('.films_list_item').clientWidth * 20;
        let newPos = pos + 100 * vector;
        newPos = newPos > 0 ? 0 : newPos < -width ? -width : newPos;
        setPosition(newPos);
    }

    return (
        <section className="carousel">
            <AppButton onClick={() => changePos(position, 1)} buttonClass='carousel_button button_left' iconUrl='https://www.svgrepo.com/show/489363/arrow-left-2.svg' />
                <FilmsList style={{transform: `translateX(${position}px)`}} length={3} />
            <AppButton onClick={() => changePos(position, -1)} buttonClass='carousel_button button_right' iconUrl='https://www.svgrepo.com/show/489372/arrow-right-2.svg' />
        </section>
    )
}

export default Carousel;