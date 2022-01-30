import './Modal.scss';
import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../atoms/IconComponent/Icon';

export const Modal = ({ showModal, setShowModal, children }) => {
    const keyPress = useCallback(
        (e) => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );

    const toggleModal = () => {
        setShowModal((prev) => !prev);
    };

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    });

    return (
        showModal && (
            <div className='modal__background'>
                <div className='modal__wrapper'>
                    <div className='modal__button'>
                        <Icon
                            iconName='circleX'
                            onClick={toggleModal}
                            size='small'
                            className='close-button'
                        />
                    </div>
                    {children}
                </div>
            </div>
        )
    );
};

Modal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    setShowModal: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
};
