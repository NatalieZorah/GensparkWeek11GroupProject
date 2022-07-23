import React from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-modal";

const MoreInfoModal = (props) => {
  return (
    <Modal className="more-info-modal" isOpen={props.isOpen}>
      {/* <Card.Img
        variant="top"
        id="img-large grid-col-span-3"
        className="more-info-img-big"
        src="https://dummyimage.com/300"
      />
      <Card.Img
        variant="top"
        id="img-small-1"
        className="more-info-img-small"
        src="https://dummyimage.com/100"
      />
      <Card.Img
        variant="top"
        id="img-small-2"
        className="more-info-img-small"
        src="https://dummyimage.com/100"
      />
      <Card.Img
        variant="top"
        id="img-small-3"
        className="more-info-img-small"
        src="https://dummyimage.com/100"
      /> */}

      <div
        id="purchase-details-container"
        className="product-details grid-col-span-2 grid-row-span-4"
      >
        <div className="product-details-header">
          <h4 className="product-details-title">Purchase Details</h4>
        </div>

        <div className="product-details-content">
          <p className="product-details-price">$500</p>
        </div>
      </div>

      <div className="product-description">
        <p className="product-description-text">L</p>
      </div>
    </Modal>
  );
};

export default MoreInfoModal;
