import PropTypes from 'prop-types';
import { Header } from '../../components';
import { Form } from '../../components/organisms/Form/Form';

export const BaseScreen = ({ children }) => {
    const onSubmit = (values) => {
        // TODO temporary, connect with API
        return values;
    };
    return (
        <>
            <Header />
            <main>{children}</main>
            <Form
                placeholder='Write something'
                type='comment'
                onSubmit={onSubmit}
            />
        </>
    );
};

BaseScreen.propTypes = {
    children: PropTypes.node.isRequired
};
