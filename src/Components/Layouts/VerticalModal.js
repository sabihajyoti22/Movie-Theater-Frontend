import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { MdOutlineDoNotDisturbAlt } from "react-icons/md"

export default function VerticalModal(props) {
    const {msg} = props
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex justify-content-center'>
                    <MdOutlineDoNotDisturbAlt className='fs-1 fw-bold' style={{color: "red"}}/>
                </div>
                <h4 className='text-center mt-3'>{msg}</h4>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
