import "./post.css";
import image from '../assets/images/mountains.jpg';

export default function Post() {
  return (
    <div className="post">
        <img src={image} alt="" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero tempore ducimus aspernatur commodi incidunt aperiam, qui quibusdam iure voluptas voluptatum at ex odio vero nulla temporibus labore quia? Molestiae, voluptatibus?
        Earum commodi illo perspiciatis ad iure quo, itaque dicta unde impedit reprehenderit veniam officia quos praesentium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero tempore ducimus aspernatur commodi incidunt aperiam, qui quibusdam iure voluptas voluptatum at ex odio vero nulla temporibus labore quia? Molestiae, voluptatibus?
        Earum commodi illo perspiciatis ad iure quo, itaque dicta unde impedit reprehenderit veniam officia quos praesentium? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero tempore ducimus aspernatur commodi incidunt aperiam, qui quibusdam iure voluptas voluptatum at ex odio vero nulla temporibus labore quia? Molestiae, voluptatibus?
        Earum commodi illo perspiciatis ad iure quo, itaque dicta unde impedit reprehenderit veniam officia quos praesentium?</p>
    </div>
    
  )
}
