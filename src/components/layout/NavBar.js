import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { clearUser, getUser } from "../../store/actions/authActions";
import "./NavBar.css";
import Search from "../search/Search";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const onBurgerClick = () => {
    setActive(!active);
  };

  const handleClickOutside = () => {
    setActive(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    const id = localStorage.getItem("token");
    if (id) {
      dispatch(getUser(id));
    }

    const checkIfClickedOutside = (e) => {
      if (active && ref.current && !ref.current.contains(e.target)) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [active, dispatch]);
  const user = useSelector((state) => state.token.user);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(clearUser());
  };

  return (
    <nav className='nav-main' ref={ref}>
      <div className='nav-main-left-section'>
        <Link to='/' className='nav-main-logo'>
          <img src={logo} alt='' className='nav-main-logo-img' />
        </Link>
        <Search />
      </div>
      <div className='nav-main-center'>
        {user && (
          <p className='user-login'>
            <i className='fas fa-user-circle'></i>
            {user.username.toUpperCase()}
          </p>
        )}
      </div>

      <ul className={`nav-main-links ${active ? "active" : ""}`}>
        <li>
          <Link to='/rated' className='nav-main-link'>
            RATED
          </Link>
        </li>
        <li>
          <Link to='/movies' className='nav-main-link'>
            MOVIES
          </Link>
        </li>
        <li>
          <Link to='/shows' className='nav-main-link'>
            SHOWS
          </Link>
        </li>

        {user ? (
          <li>
            <Link to='/' onClick={handleLogout} className='nav-main-link'>
              LOGOUT
            </Link>
          </li>
        ) : (
          <li>
            <Link to='/login' className='nav-main-link'>
              LOGIN
            </Link>
          </li>
        )}
      </ul>
      <div
        className='main-nav-burger'
        role='button'
        onClick={onBurgerClick}
        onKeyDown={onBurgerClick}
        tabIndex={0}
      >
        <div
          className={`main-nav-burger-line1 ${
            active ? "main-nav-burger-toggle-line1" : ""
          }`}
        />
        <div
          className={`main-nav-burger-line2 ${
            active ? "main-nav-burger-toggle-line2" : ""
          }`}
        />
        <div
          className={`main-nav-burger-line3 ${
            active ? "main-nav-burger-toggle-line3" : ""
          }`}
        />
      </div>
    </nav>
  );
};

export default NavBar;
