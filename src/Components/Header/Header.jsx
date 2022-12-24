import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'


const Header = (props) => {
    return (
        <header className='header'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf_4PhO9fy33g3JCkyIKuLgeuedliEM9UGLQ&usqp=CAU' alt='' />
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to='/login'>LOGIN</NavLink>}
            </div>
        </header>
    )
}

export default Header;