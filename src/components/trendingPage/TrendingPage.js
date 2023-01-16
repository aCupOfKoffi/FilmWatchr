import Carousel from "../carousel/Carousel";
import useService from "../services/Service";


const TrendingPage = () => {
    const { getMostPopular} = useService();

    return (
        <section>
            <h3>Currently in theaters:</h3>
            <Carousel method={getMostPopular} />        
        </section>
    )
}

export default TrendingPage;