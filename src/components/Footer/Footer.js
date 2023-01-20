import './Footer.css';
import github from '../../assets/icons/github.svg';
import vk from '../../assets/icons/vk.svg';
import reddit from '../../assets/icons/reddit.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import indeed from '../../assets/icons/indeed.svg';
import tmdb from '../../assets/icons/tmdb.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <p className='footer_header'>Mark Egoshin, 2023</p>
            <ul className='contact_list'>
                <li className='contact_list-item'>
                    <a href='https://github.com/aCupOfKoffi'>
                        <img src={github} />
                    </a>
                </li>
                <li className='contact_list-item'>
                    <a href='https://vk.com/acupofkoffi'>
                        <img src={vk} />
                    </a>
                </li>
                <li className='contact_list-item'>
                    <a href='https://www.reddit.com/'>
                        <img src={reddit} />
                    </a>
                </li>
                <li className='contact_list-item'>
                    <a href='https://www.linkedin.com/in/mark-egoshin-132011256/'>
                        <img src={linkedin} />
                    </a>
                </li>
                <li className='contact_list-item'>
                    <a href='https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage&_ga=2.100658394.592666746.1674225211-1916467447.1668497174'>
                        <img src={indeed} />
                    </a>
                </li>
            </ul>
            <div className='poweredBy'>
                <p>Powered by </p>
                <a href='https://www.themoviedb.org/?language=ru'>
                    <img src={tmdb} alt='Powered by TMDb' />
                </a>

            </div>
        </footer>

    )
}

export default Footer;