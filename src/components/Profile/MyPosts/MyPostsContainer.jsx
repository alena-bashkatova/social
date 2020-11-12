import React from 'react';
import {udateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/profile-reduser';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = udateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
      <MyPosts udateNewPostText={onPostChange} 
              addPost={addPost} 
              posts={state.profilePage.posts}
              newPostText={state.profilePage.newPostText}
      />
  );
}

export default MyPostsContainer;