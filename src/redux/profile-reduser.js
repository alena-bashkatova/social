const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, text: "It's my fourth post", likeCount: 18},
        {id: 2, text: "It's my third post", likeCount: 15},
        {id: 3, text: "It's my second post", likeCount: 5},
        {id: 4, text: "It's my first post", likeCount: 2}
    ],
    newPostText: 'New post',
}

const profileReduser = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = ''; 
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const udateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReduser;