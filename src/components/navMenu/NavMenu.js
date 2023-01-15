import { Link, NavLink } from 'react-router-dom';
import './navMenu.css';

const NavMenu = () => {
    let navList = [
        {
            id: 1,
            name: 'Films',
            active: true,
            link: ''
        },
        {
            id: 3,
            name: 'Genres',
            active: false,
            link: 'genres'
        },
        {
            id: 2,
            name: 'Actors',
            active: false,
            link: 'actors'
        },
        {
            id: 4,
            name: 'Trending',
            active: false,
            link: 'trending'
        }
    ];

    const formNav = (arr) => {
        return arr.map(({name, active, link}, i) => {
            return (
                <li key={i} className={`navigation_list_item`}>
                        <NavLink style={({ isActive }) => ({color: isActive ? 'white' : 'black', backgroundColor: isActive ? '#0d6efd' : 'rgb(241, 241, 241)'})} to={`/${link}`}>
                        {name}
                </NavLink>
                    </li>
                
            )
        })
    }
    let elements = formNav(navList);

    return (
        <nav className='navigation'>
            <ul className="navigation_list">
                {elements}
            </ul>
        </nav>
    )
}

export default NavMenu;