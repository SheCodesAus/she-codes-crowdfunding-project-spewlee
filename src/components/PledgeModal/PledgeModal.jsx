import React, { useState } from "react";

// Bootstrap
import { Modal } from "react-bootstrap";

// Components
import PledgeForm from "../PledgeForm/PledgeForm";



function PledgeModal(projectData) {
    // State
    const [show, setShow] = useState(false);

    // Actions
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
            <PledgeForm projectId={projectData.id} />
            </Modal.Body>
        </Modal>
    );
}

export default PledgeModal;