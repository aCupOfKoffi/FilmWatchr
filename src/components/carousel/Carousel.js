import AppButton from "../appButton/AppButton"

const Carousel = () => {

    return (
        <section className="carousel">
            <AppButton onClick={() => console.log('Left')} buttonClass='carousel_button__left' iconUrl='https://www.svgrepo.com/show/489363/arrow-left-2.svg' />
        </section>
    )
}

export default Carousel;