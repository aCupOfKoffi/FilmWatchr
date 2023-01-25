import star from '../../assets/icons/star.svg';
import './Rating.css';

const Rating = ({rate = 'N/A', ...props}) => {
    return (
    <span {...props} className="rating">
        <img className="rating_icon" src={star} alt="star" />
        <p className="rating_coefficient">{rate === 0 ? 'N/A' : rate.toFixed(1)}</p>
    </span>
    )
}

export default Rating;