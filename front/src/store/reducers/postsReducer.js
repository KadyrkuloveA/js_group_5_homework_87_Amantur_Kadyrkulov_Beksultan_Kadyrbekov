import {FETCH_ALL_POSTS_SUCCESS} from "../actions/postsActions";

const initialState = {
    allPosts: []
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_POSTS_SUCCESS:
            return {...state, allPosts: action.posts};
        default:
            return state;
    }
};

export default postsReducer;
