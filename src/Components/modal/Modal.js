import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import Style from './Modal.module.css';

const Backdrop = ({ close }) => {
    return(
        <div className={Style.backdrop} onClick={close}></div>
    )
}

const Overlay = ({ children }) =>  (
    <div className={Style.overLay}>
        { children }
    </div>
)


const Modal = ( props ) => {
    const { showModal, closeModal, children } = props;

    return (
        showModal && (
            <>
                {ReactDOM.createPortal (
                    <>
                        <Backdrop close={closeModal} />
                        <Overlay>{ children }</Overlay>
                    </>,
                    document.getElementById('modal')
                )}
            </>
        )
    )
}

export default Modal;