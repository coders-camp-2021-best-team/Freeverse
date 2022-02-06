import { useNavigate } from 'react-router';
import { Modal, ChatCreatorForm } from '../../components';
import { routes } from '../../routes/Routes';

export const ChatCreatorFormPage = () => {
    const navigate = useNavigate();

    return (
        <Modal
            showModal
            setShowModal={(state) => {
                if (state) navigate(routes.ChatSelector, { replace: true });
            }}
        >
            <ChatCreatorForm />
        </Modal>
    );
};
