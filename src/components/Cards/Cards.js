import React, { useState } from "react";
import "./Cards.css";
import Modal from "react-modal";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

export const Cards = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const nocover =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxr7qsJEU5le5WblgbrtMqbaRB60PuAx0EEvuYztHwHw&s";
  const maxChars = 50;

  const newTitle =
    items.volumeInfo.title.length > maxChars
      ? items.volumeInfo.title.substring(0, maxChars) + "..."
      : items.volumeInfo.title;

  let thumbnail = items.volumeInfo.imageLinks
    ? items.volumeInfo.imageLinks && items.volumeInfo.imageLinks.smallThumbnail
    : nocover;

  const subtitle = items.volumeInfo.subtitle
    ? items.volumeInfo.subtitle
    : "No subtitle available";

  const publisher = items.volumeInfo.publisher
    ? items.volumeInfo.publisher
    : "No data available";

  const author = items.volumeInfo.authors
    ? items.volumeInfo.authors[0]
    : " No data ";
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="card">
      <h3 className="book-name">{newTitle}</h3>
      <img className="card-image" src={thumbnail} alt="unloaded_image" />
      <p>page count: {items.volumeInfo.pageCount}</p>
      <p className="author">author: {author}</p>
      <button className="see-more" onClick={() => setIsOpen(true)}>
        Read more ..
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        portalClassName="modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="modal-container">
          <div className="sub-left">
            <h3>{newTitle}</h3>
            <img src={thumbnail} alt="modalimg" />
          </div>
          <div className="sub-right">
            <h4>
              Subtitle:
              <br />
              {subtitle}
            </h4>
            <h4 className="desc">description:</h4>
            <div className="desc-container">
              <p className="desc-para">
                <br />
                {items.volumeInfo.description}
              </p>
            </div>
            <p>
              Published Year:
              {items.volumeInfo.publishedDate}
            </p>
            <p>
              Publisher:
              {publisher}
            </p>
            <button onClick={closeModal}>close</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
