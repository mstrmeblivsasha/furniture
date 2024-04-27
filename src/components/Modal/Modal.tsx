"use client";
import Modal from "react-modal";
import { useContext } from "react";

import { SiteContext } from "@/context/SiteContext";
import ContactForm from "@/components/ContactForm/ContactForm";
import "./Modal.css";

// this modal is in the Layout now :)

const ModalR = () => {
    const { isModalOpen, setModalOpen } = useContext(SiteContext);

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <Modal
            isOpen={isModalOpen}
            overlayClassName={"backdrop"}
            className={"modalContent"}
            closeTimeoutMS={700}
            onRequestClose={closeModal}
            ariaHideApp={false}
        >
            {/* here must be imported children  like this < Child/>*/}
            <ContactForm />
            {/* {children} */}
        </Modal>
    );
};

export default ModalR;
