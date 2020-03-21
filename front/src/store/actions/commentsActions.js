import axiosApi from "../../axiosApi";

export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';

const fetchCommentsSuccess = comments => ({type: FETCH_COMMENTS_SUCCESS, comments});


export const fetchComments = (postId) => {
    return async dispatch => {
        try{
            const response = await axiosApi.get('/comments?post=' +  postId);
            console.log(response.data);
            dispatch(fetchCommentsSuccess(response.data));
        } catch (e){
            console.error(e);
        }
    }
};
