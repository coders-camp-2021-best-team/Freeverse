import PropTypes from 'prop-types';
import { Modal } from '../../molecules';
import { Button, Text, ImageComponent } from '../../atoms';
import COOKIE from '../../../images/cookie.png';

import './CookieModal.scss';

export const CookieModal = ({ text, isOpen, setIsOpen, searchAgain }) => {
    return (
        <Modal showModal={isOpen} setShowModal={setIsOpen} customClass='cookie'>
            <div className='cookie__modal'>
                <header className='cookie__modal__top'>
                    <ImageComponent src={COOKIE} alt='' size='large' />
                    <h2>
                        <Text
                            type='primary'
                            size='medium'
                            customClass='cookie__modal__top__text'
                        >
                            Your fortune-telling for today:
                        </Text>
                    </h2>
                </header>
                <div className='cookie__modal__bot'>{text}</div>
                <Button
                    text='Search again'
                    onClick={searchAgain}
                    customClass='cookie__modal__button'
                />
            </div>
        </Modal>
    );
};

CookieModal.propTypes = {
    text: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    searchAgain: PropTypes.func.isRequired
};
