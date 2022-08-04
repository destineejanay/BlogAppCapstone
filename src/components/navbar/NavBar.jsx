import { Link } from "react-router-dom";
import "./navbar.css";
import image from "../../assets/images/me.jpg";

export default function NavBar() {
  const currentUser = true;
  return (
    <div className="nav">
      <div className="navLeft">
        <i className="navIcon fa-brands fa-tiktok"></i>
        <i className="navIcon fa-brands fa-instagram"></i>
        <i className="navIcon fa-brands fa-linkedin"></i>
        <i className="navIcon fa-brands fa-twitter"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="navListItem">{currentUser && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="navRight">
        {currentUser ? (
          <img className="navImg" src={image} alt="" />
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
              </li>
              <li className="navListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
