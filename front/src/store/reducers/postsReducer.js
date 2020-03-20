import {FETCH_ALL_POSTS_SUCCESS, FETCH_SINGLE_POST_SUCCESS} from "../actions/postsActions";

const initialState = {
    allPosts: [],
    singlePost: null,
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_POSTS_SUCCESS:
            return {...state, allPosts: action.posts};
        case FETCH_SINGLE_POST_SUCCESS:
            return {...state, singlePost: action.post};
        default:
            return state;
    }
};

export default postsReducer;
