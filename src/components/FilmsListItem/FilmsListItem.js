import star from '../../assets/icons/star.svg';
import knife from '../../assets/icons/knife.svg';

const FilmsListItem = ({title, adult, poster_path, id, vote_average}) => {
    return (
        <li key={id} className='films_list_item'>
        <img className='item_poster' src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='sdf' />
        <div className="films_list_item_info">
            <h2>{title}</h2>
            <span className="vote-rating">
                <img className="rating_icon" src={star} alt="star" />
                <p className="rating_coefficient">{vote_average.toFixed(1)}</p>
            </span>
        </div>
        <ul className="restrictions_list">
            <li className="restrictions_list_item">
                {adult ? <img src={knife} alt="adult" /> : null}
            </li>
        </ul>
    </li>
    )
}

export default FilmsListItem;