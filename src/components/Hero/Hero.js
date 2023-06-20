import React, { useState } from "react";
import "./Hero.css";
import { Cards } from "../Cards/Cards";
import axios from "axios";

export const Hero = () => {
  const [input, setInput] = useState("");
  const [bookData, setBookData] = useState([]);
  const api_key = "AIzaSyCa2uVlMae3qsdsgmrTM8eEcKhUz0BBWeU";
  console.log(bookData);
  const getBook = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${input}&key=${api_key}`
      )
      .then((res) => setBookData(res.data.items))
      .catch((res) => console.log(res));
  };
  return (
    <div className="container">
      <div className="heading-container">
        <h1 className="heading">Book Collections</h1>
      </div>
      <div className="input-container">
        <input
          type="search"
          className="input-search"
          placeholder="enter the book name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <button className="btn" onClick={getBook}>
          Search Book
        </button>
      </div>
      <div className="quote-container">
        <h4 className="quote">
          A book without a room is a human without soul.
        </h4>
      </div>
      <div className="image-container">
        <img
          className="image"
          src="https://images.pexels.com/photos/7034389/pexels-photo-7034389.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="book"
        />
      </div>
      <div className="card-container">
        {bookData.map((items) => {
          return <Cards items={items} />;
        })}
      </div>
    </div>
  );
};
