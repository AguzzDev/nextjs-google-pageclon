import Modal from "react-modal"
import React, { useState } from 'react'
import { ModalImages } from "./modal"

const customStyles = {
    content: {
        top: '49%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: "1050px",
        height: "610px",
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: "0",
        margin: "0",
    },
};

export function Avatar({ url }) {
    return (
        <img
            loading="lazy"
            src={url}
            alt="Image Profile"
            className="h-9 w-9 rounded-full object-cover"
        />
    )
}
export function AvatarDropdown({ url }) {
    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => {
        setModalOpen(true)
    }
    const closeModal = () => {
        setModalOpen(false)
        console.log("cerrar")
    }
    return (
        <>
            <div>
                <img
                    loading="lazy"
                    src={url}
                    alt="Image Profile"
                    className="h-20 w-20 rounded-full object-cover"
                    title="Perfil"
                />
                <div
                    className="w-8 h-8 flex items-center pl-1 rounded-full bg-gray-100 cursor-pointer shadow-md absolute top-20 left-48 "
                    onClick={openModal}
                >
                    <svg className="w-6 h-6 fill-current text-gray-700 hover:text-blue-600"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h16v12zM12 9c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path></svg>
                    <Modal
                        isOpen={modalOpen}
                        onRequestClose={closeModal}
                        closeTimeoutMS={200}
                        style={customStyles}
                    >
                        <ModalImages />
                    </Modal>
                </div>
            </div>
        </>
    )
}

