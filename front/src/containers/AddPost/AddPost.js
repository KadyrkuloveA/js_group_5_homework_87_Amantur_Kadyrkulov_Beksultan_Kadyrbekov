import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import FormElement from "../../components/UI/Form/FormElement";
import {useSelector} from "react-redux";
import axiosApi from "../../axiosApi";

const initialForm = {
    title: '',
    description: '',
    image: '',
};
const AddPost = () => {
    const user = useSelector(state => state.users.user);
    const [postForm, setPostForm] = useState(initialForm);
    const onInputChange = e => {
        setPostForm({...postForm, [e.target.name]: e.target.value});
    };
    const onFileChange = e => {
        setPostForm({...postForm, [e.target.name]: e.target.files[0]});
    };
    const formSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(postForm).forEach(key => {
            formData.append(key, postForm[key]);
        });
        console.log(formData);
        await axiosApi.post('/posts', formData, {headers: {"Authorization": "Token " + user.token}});
    };
    return (
        <>
            <Form onSubmit={formSubmit}>
                <FormElement
                    propertyName='title'
                    title='Title'
                    value={postForm.title}
                    onChange={onInputChange}
                    type='text'
                    placeholder='Enter the title'
                    required={true}
                />
                <FormElement
                    propertyName='description'
                    title='Description'
                    value={postForm.description}
                    onChange={onInputChange}
                    type='text'
                    placeholder='Enter any description or send an image'
                />
                <FormGroup>
                    <Label sm={2} for="image">Image</Label>
                    <Col sm={10}>
                        <Input
                            type="file"
                            name="image" id="image"
                            onChange={onFileChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={{offset:2, size: 10}}>
                        <Button type="submit" color="primary">Send Post</Button>
                    </Col>
                </FormGroup>
            </Form>
        </>
    );
};

export default AddPost;
