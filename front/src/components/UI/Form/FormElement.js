import React from 'react';
import {Col, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import PropTypes from 'prop-types';

const FormElement = props => {
    return (
        <FormGroup>
            <Label sm={2} for={props.propertyName}>{props.title}</Label>
            <Col sm={10}>
                <Input
                    invalid={!!props.error}
                    type={props.type} id={props.propertyName}
                    name={props.propertyName}
                    value={props.value}
                    onChange={props.onChange}
                    required={props.required}
                    autoComplete={props.autoComplete}
                    placeholder={props.placeholder}
                />
                <FormFeedback>{props.error}</FormFeedback>
            </Col>
        </FormGroup>
    );
};

FormElement.propTypes = {
    propertyName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    autoComplete: PropTypes.string,
};

export default FormElement;
