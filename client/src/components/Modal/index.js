import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        position: 'absolute',
        top: '40px',
        left: '100px',
        right: '100px',
        bottom: 'auto',
        border: '1px solid #ccc',
        overflow: 'auto',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px 35px',
    },
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
};


const ModalWindow = ({ children, isOpen, handleOpen }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleOpen}
            ariaHideApp={false}
            style={customStyles}
        >
            {children}
        </Modal>
    );
};

export default ModalWindow;