import React, {useState} from 'react';
import {Button, Col, Form, FormGroup} from "reactstrap";
import FormElement from "../UI/Form/FormElement";
import axiosApi from "../../axiosApi";

const AddComments = ({post, user, fetchComments}) => {
    const [text, setText] = useState('');
    const submitComment = async e => {
        e.preventDefault();
        console.log(user);
        console.log({post, text});
        await axiosApi.post('/comments?post=' + post, {text}, { headers: {"Authorization": "Token " + user} });
        fetchComments();
        setText('');
    };
    return (
        <Form onSubmit={submitComment}>
            <FormElement
                propertyName='text'
                title='Your comment'
                value={text}
                type='textarea'
                onChange={(e) => setText(e.target.value)}
            />
            <FormGroup row>
                <Col sm={{offset: 2, size: 10}}>
                    <Button type='submit' color='primary'>
                        Post
                    </Button>
                </Col>
            </FormGroup>
        </Form>
    );
};

export default AddComments;
