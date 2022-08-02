import "./sidebar.css";
import image from "../../assets/images/me.jpg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src={image} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vero.
          Blanditiis commodi est distinctio suscipit, voluptas animi sapiente
          deleniti ea repudiandae ad enim. Blanditiis ex nostrum ipsa architecto
          asperiores impedit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Technology</li>
          <li className="sidebarListItem">Military</li>
          <li className="sidebarListItem">Society</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-tiktok"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}
