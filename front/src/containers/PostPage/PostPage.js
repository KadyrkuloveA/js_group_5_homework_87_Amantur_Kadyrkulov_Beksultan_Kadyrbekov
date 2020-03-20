import React, {useEffect} from 'react';
import {Container} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import ImageThumbnail from "../../components/ImageThumbnail/ImageThumbnail";
import {fetchSinglePost} from "../../store/actions/postsActions";

const PostPage = () => {
    const singlePost = useSelector(state => state.posts.singlePost);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSinglePost('5e751313a9678814e602f5cd'));
    }, [dispatch]);
    console.log(singlePost);
    if(singlePost){
        return (
            <Container>
                <div>
                    <ImageThumbnail/>
                </div>
                <h1>Title: {singlePost.title}</h1>
                <h3>Description:</h3>
                <p>{singlePost.description}</p>
            </Container>
        );
    } else {
        return <h2>No posts was found</h2>
    }

};

export default PostPage;
