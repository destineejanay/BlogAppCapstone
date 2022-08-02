import './navbar.css';
import image from "../assets/images/me.jpg";

export default function NavBar() {
  return (
    <div className="nav">
        <div className='navLeft'>
        <i className="navIcon fa-brands fa-tiktok"></i>
        <i className="navIcon fa-brands fa-instagram"></i>
        <i className="navIcon fa-brands fa-linkedin"></i>
        <i className="navIcon fa-brands fa-twitter"></i>
        </div>
        <div className='navCenter'>
            <ul className="navList">
                <li className="navListItem">HOME</li>
                <li className="navListItem">ABOUT</li>
                <li className="navListItem">CONTACT</li>
                <li className="navListItem">WRITE</li>
                <li className="navListItem">LOGOUT</li>
            </ul>
        </div>
        <div className='navRight'>
            <img className="navImg" src={image} alt="" />
            <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
