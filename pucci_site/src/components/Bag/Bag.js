import Modal from 'react-modal';
import React from 'react'
import './Bag.css'

export default function Bag(props) {
  return (
	<div>
		<Modal className="bag-modal"
			size="small"
			position="center"
			isOpen={props.modalIsOpen}
			onRequestClose={props.handleClose}
		>
			Here's the modal!
		</Modal>
	</div>
  )
}

