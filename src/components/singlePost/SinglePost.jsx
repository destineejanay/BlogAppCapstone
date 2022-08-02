import './singlepost.css';
import islands from '../../assets/images/islands.jpg'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src={islands} alt="" className="singlePostImg" />
            <h1 className='singlePostTitle'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <bold>Destinee</bold></span>
                <span className='singlePostDate'>Date: 1 hour ago</span>
                
            </div>
            <p className='singlePostDesc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus pariatur dignissimos quo explicabo voluptatum iste in alias nostrum, quis inventore hic optio, eos error facilis dolor impedit, rerum odio laboriosam.
                Officiis nesciunt officia ipsam ipsa dignissimos architecto iste exercitationem voluptates possimus, obcaecati accusantium voluptas nihil dolor cumque quos sed porro earum reiciendis ut, beatae sit praesentium? Aliquid molestias dolores nisi.
                Ab ipsam dolorem asperiores unde architecto maxime inventore, distinctio atque? Pariatur facere tempora consectetur quisquam inventore eveniet aliquid repudiandae deleniti fugiat quaerat. Veritatis repudiandae fugiat quam quo animi harum unde!
                Dolores quam ullam a! Ut, amet hic. Provident quod natus, ad possimus harum ex accusamus incidunt voluptatem temporibus vel adipisci? Iure placeat neque commodi tenetur! Quibusdam veritatis voluptatem odit praesentium.
                Neque, ea vel! Neque veniam explicabo sunt eligendi vero, officia odio ipsa? Aspernatur ipsum fuga obcaecati. Corporis porro animi cupiditate in! Aut totam fugit facilis quas cumque adipisci vitae mollitia.
                Exercitationem aliquid similique quibusdam, quod quaerat quidem cupiditate rem ratione deleniti consectetur incidunt repellendus necessitatibus sint impedit molestiae sequi esse architecto assumenda, vero cumque maxime. Corporis perspiciatis pariatur ut. Aliquam!
                Laudantium, saepe. Fuga consequatur reiciendis accusantium fugit unde eligendi, error quisquam. Animi optio, dignissimos dolorem quas porro perspiciatis deleniti vel numquam ipsam unde! Quam minus fugit magnam? Harum, beatae corporis.</p>
        </div>
    </div>
  )
}
