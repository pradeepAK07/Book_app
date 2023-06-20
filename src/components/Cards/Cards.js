import React from "react";
import "./Cards.css";

export const Cards = ({ items }) => {
  const maxChars = 50;
  const newTitle =
    items.volumeInfo.title.length > maxChars
      ? items.volumeInfo.title.substring(0, maxChars) + "..."
      : items.volumeInfo.title;
  let thumbnail =
    items.volumeInfo.imageLinks && items.volumeInfo.imageLinks.smallThumbnail;

  return (
    <div className="card">
      <h3 className="book-name">{newTitle}</h3>
      <img className="card-image" src={thumbnail} alt="unloaded_image" />
      <p>page count: {items.volumeInfo.pageCount}</p>
      <p className="author">author: {items.volumeInfo.authors[0]}</p>
    </div>
  );
};
