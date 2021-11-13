import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { clearUser, getUser } from "../../store/actions/authActions";
import "./NavBar.css";
import Search from "../search/Search";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const id = localStorage.getItem("token");
    if (id) {
      dispatch(getUser(id));
    }
  }, [dispatch]);
  const user = useSelector((state) => state.token.user);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(clearUser());
  };

  console.log(user);
  return (
    <nav className='nav-main'>
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

      <ul className='nav-main-links'>
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
    </nav>
  );
};

export default NavBar;
