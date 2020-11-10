import React from 'react';
import myPostsStyles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  
  let postsElems = props.posts
  .map( post => <Post message={post.text} like={post.likeCount} />);

  let newPostElem = React.createRef();

  let addPost = () => {
    props.dispatch({type: 'ADD-POST'});
  };

  let onPostChange = () => {
    let text = newPostElem.current.value;
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text}
    props.dispatch(action);
  };

  return (
      <div className={myPostsStyles.posts_wrapper}>
        <h3>My posts</h3>
        <textarea onChange={onPostChange} 
                  ref={newPostElem} 
                  value={props.newPostText} 
                  />
        <button onClick={ addPost }>Add post</button>

        <ul className={myPostsStyles.posts}>
          {postsElems}
        </ul>
      </div>
  );
}

export default MyPosts;