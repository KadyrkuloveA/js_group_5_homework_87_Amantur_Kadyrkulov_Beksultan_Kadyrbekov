import React, {useEffect} from 'react';
import {Container} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import ImageThumbnail from "../../components/ImageThumbnail/ImageThumbnail";
import {fetchSinglePost} from "../../store/actions/postsActions";
import {fetchComments} from "../../store/actions/commentsActions";
import AddComments from "../../components/AddComments/AddComments";

const PostPage = props => {
    const user = useSelector(state => state.users.user);
    const singlePost = useSelector(state => state.posts.singlePost);
    const comments = useSelector(state => state.comments.comments);
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
                {user ? (
                    <>
                        <h3>Post your comment</h3>
                        <AddComments
                            user={user.token}
                            post={props.match.params.postId}
                        />
                    </>
                ) : null}
                <h3 className='mt-5'>Comments</h3>
                <div className='mx-5 p-5'>
                    {comments.map(comment => {

                    })}
                </div>
            </Container>
        );
    } else {
        return <h2>No posts was found</h2>
    }

};

export default PostPage;
