import React, {useEffect} from 'react';
import moment from "moment";
import {Card, Col, Container} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPosts} from "../../store/actions/postsActions";
import ImageThumbnail from "../../components/ImageThumbnail/ImageThumbnail";

const Main = props => {
    const posts = useSelector(state => state.posts.allPosts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllPosts());
    }, [dispatch]);
    return (
        <Container className='mt-5'>
            {posts.map(post => (
                <Card key={post._id} className='flex-row' onClick={() => props.history.push('/post-page/' + post._id)}>
                    <ImageThumbnail image={post.image}/>
                    <Col className='py-3'>
                        <p>
                            <span>{moment(post.datetime).format('MMMM Do YYYY, h:mm:ss a')}</span>
                            <span> by <b>{post.user.username}</b></span>
                        </p>
                        <p>{post.title}</p>
                    </Col>
                </Card>
            ))}
        </Container>
    );
};



export default Main;
