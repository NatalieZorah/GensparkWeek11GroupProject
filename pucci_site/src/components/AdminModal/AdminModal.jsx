import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import "./AdminModal.css";

const AdminModal = (props) => {
    const modalPosition = React.useState('center');
    const modalSize = React.useState('small');

    return (
        <div style={{ display: 'flex' }}>
            <Modal className="login-modal"
                size={modalSize}
                position={modalPosition}
                isOpen={props.isOpen}
                onRequestClose={props.handleClose}
            >
                <div className="admin-box">

                    <div className="admin-content">

                        <div className='admin-header-container'>
                            <h2 className='admin-header'>Admin Settings</h2>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

const UserController = () => {

}

const ProductController = () => {

}

const OrderController = () => {

}

export default AdminModal