import { Link, NavLink } from 'react-router-dom';
import './navMenu.css';
import { navigationData as navList } from '../../resources/navigationData';

const NavMenu = () => {


    const formDropMenu = (arr, itemClass) => {
        console.log(arr)
        let elements = arr.map(item => {
            return (
                <li key={crypto.randomUUID()} className={itemClass}>
                    <NavLink to={`/genres/${item.toLowerCase()}`}>
                        {item}
                    </NavLink>
                </li>
             )
        })
        console.log(typeof arr, arr.map(item => item))

        return (
            <ul className='drop_list'>
                {elements}
            </ul>
        )
    }


    
    const formNav = (arr) => {
        return arr.map((item) => {
            return (
                <li key={crypto.randomUUID()} className={`navigation_list_item`}>
                        <NavLink style={({ isActive }) => ({color: 'white', borderBottom: `3px solid ${isActive ? '#0d6efd' : '#313131'}`})} to={`/${item.link}`}>
                            {item.name}
                        </NavLink>
                        {item.dropItems.length > 0 ? formDropMenu(item.dropItems, 'drop_list_item') : null}
                    </li>
                
            )})
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