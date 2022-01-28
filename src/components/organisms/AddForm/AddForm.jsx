import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Icon } from '../..';

import './Form.scss';

export const AddForm = ({ placeholder, type }) => {
    const submitOnEnter = (event) => {
        if (event.key === 'Enter' && event.shiftKey === false) {
            event.preventDefault();
            event.target.form.dispatchEvent(
                new Event('submit', { cancelable: true, bubbles: true })
            );
        }
    };

    const onSubmit = (values, action) => {
        // TODO temporary, connect with API
        console.log(values);
        action.resetForm({
            values: {
                [`${type}`]: ''
            }
        });
    };

    const focusOnInput = (event) => {
        event.target[0].focus();
    };

    const validation = Yup.object().shape({
        [`${type}`]: Yup.string().required('Required')
    });

    return (
        <div
            className={`form form__${type}`}
            role='directory'
            onClick={focusOnInput}
        >
            <Formik
                initialValues={{ name: type }}
                validationSchema={validation}
                onSubmit={onSubmit}
            >
                {({ handleSubmit, errors, touched }) => (
                    <Form>
                        <Field
                            name={type}
                            as='textarea'
                            placeholder={placeholder}
                            validate={validation}
                            onKeyDown={submitOnEnter}
                        />
                        {errors.type && touched.type ? (
                            <div>{errors.type}</div>
                        ) : null}
                        <Icon iconName='send' onClick={handleSubmit} />
                    </Form>
                )}
            </Formik>
        </div>
    );
};

AddForm.propTypes = {
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['comment', 'post', 'chat']).isRequired
};
