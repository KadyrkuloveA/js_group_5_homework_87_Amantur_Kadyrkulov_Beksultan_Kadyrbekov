import React, {useEffect} from 'react';
import {Container} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import ImageThumbnail from "../../components/ImageThumbnail/ImageThumbnail";
import {fetchSinglePost} from "../../store/actions/postsActions";
import {fetchComments} from "../../store/actions/commentsActions";

const PostPage = props => {
    const singlePost = useSelector(state => state.posts.singlePost);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSinglePost(props.match.params.postId));
        dispatch(fetchComments(props.match.params.postId));
    }, [dispatch]);
    console.log(singlePost);
    if(singlePost){
        return (
            <Container>
                <div>
                    <ImageThumbnail image={singlePost.image}/>
                </div>
                <h1>Title: {singlePost.title}</h1>
                <h3>Description:</h3>
                <p>{singlePost.description}</p>
                <h3 className='mt-5'>Comments</h3>
                <div className='mx-5 p-5'>
                    comments
                </div>
            </Container>
        );
    } else {
        return <h2>No posts was found</h2>
    }

};

export default PostPage;
