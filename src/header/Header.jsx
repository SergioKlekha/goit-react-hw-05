import { NavLink } from "react-router-dom";
import css from "./Header.module.css"
import clsx from "clsx";


const setActiveClass = ({isActive}) => {
    return (
        clsx(css.link, isActive && css.active)
    )
}

function Header() {
    
            return (
                <header>
                <h2 className='headerRoutin'>Routin</h2>
                <nav className='navigation'>
                    <NavLink className={setActiveClass} to='/'>
                    Home
                    </NavLink>
                    <NavLink className={setActiveClass} to='/about'>
                    About
                    </NavLink>
                    <NavLink className={setActiveClass} to='/users'>
                    Users
                    </NavLink>
                </nav>
                </header>
            )
}

export default Header;