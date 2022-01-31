import { useCallback, useState } from 'react';
import { Formik, Form as FormikForm, Field } from 'formik';
import PropTypes from 'prop-types';
import { Icon } from '../..';

import './Form.scss';

export const Form = ({ placeholder, type, onSubmit }) => {
    const [error, setError] = useState(false);
    const submitOnEnter = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            event.target.form.dispatchEvent(
                new Event('submit', { cancelable: true, bubbles: true })
            );
        }
    };

    const focusOnInput = (event) => {
        if (event.target[0]) {
            event.target[0].focus();
        }
    };

    const formSubmitEvent = useCallback(
        (values, action) => {
            onSubmit(values);
            action.resetForm({
                values: {
                    [`${type}`]: ''
                }
            });
        },
        [onSubmit, type]
    );

    const renderForm = useCallback(
        ({ handleSubmit, validateField }) => {
            const inputValidate = (value) => {
                if (!value) {
                    setError(true);
                } else {
                    setError(false);
                }
            };
            return (
                <FormikForm>
                    <Field
                        name={type}
                        as='textarea'
                        placeholder={placeholder}
                        onKeyDown={submitOnEnter}
                        validate={inputValidate}
                    />
                    <Icon
                        iconName='send'
                        onClick={() => {
                            handleSubmit();
                            validateField(type);
                        }}
                    />
                </FormikForm>
            );
        },
        [error, placeholder, type]
    );
    return (
        <div
            className={`form form__${type} ${error ? 'error' : ''}`}
            role='directory'
            onClick={focusOnInput}
        >
            <Formik initialValues={{ name: '' }} onSubmit={formSubmitEvent}>
                {renderForm}
            </Formik>
        </div>
    );
};

Form.propTypes = {
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['comment', 'post', 'chat']),
    onSubmit: PropTypes.func.isRequired
};

Form.defaultProps = {
    type: 'comment'
};
