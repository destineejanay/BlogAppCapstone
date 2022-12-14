import "./header.css";
import ocean from '../../assets/images/ocean.jpg';

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">Destinee Muse's</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src={ocean} alt="Ocean Rocks"/>
    </div>
  )
}
