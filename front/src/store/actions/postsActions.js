import axiosApi from "../../axiosApi";

export const FETCH_ALL_POSTS_SUCCESS = 'FETCH_ALL_POSTS_SUCCESS';
export const FETCH_SINGLE_POST_SUCCESS = 'FETCH_SINGLE_POST_SUCCESS';

const fetchAllPostsSuccess = posts => ({type: FETCH_ALL_POSTS_SUCCESS, posts});
const fetchSinglePostSuccess = post => ({type: FETCH_SINGLE_POST_SUCCESS, post});

export const fetchAllPosts = () => {
    return async dispatch => {
        try{
            const response = await axiosApi.get('/posts');
            console.log(response.data);
            dispatch(fetchAllPostsSuccess(response.data));
        } catch (e) {
            console.error(e);
        }
    }
};

export const fetchSinglePost = (postId) => {
    return async dispatch => {
        try {
            const response = await axiosApi.get('/posts/' + postId);
            dispatch(fetchSinglePostSuccess(response.data));
        } catch (e){
            console.error(e);
        }
    }
};
