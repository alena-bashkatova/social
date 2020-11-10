import postStyles from './Post.module.css';

const Post = (props) => {
  return (
    <li className={postStyles.post}>
      <figure>
        <img className={postStyles.avatar} src="https://www.flaticon.com/svg/static/icons/svg/147/147144.svg" alt="avatar"/>
        <figcaption>
          {props.message}
          <button className={postStyles.like}>Like {props.like}</button>
        </figcaption> 
      </figure>
    </li>
  );
}

export default Post;