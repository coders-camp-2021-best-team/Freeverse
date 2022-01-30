import './Modal.scss';
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../atoms/IconComponent/Icon';

export const Modal = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

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
        <>
            <Icon
                iconName='comment'
                onClick={toggleModal}
                className='comment'
            />
            {showModal ? (
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
            ) : null}
        </>
    );
};

Modal.propTypes = {
    children: PropTypes.string.isRequired
};
