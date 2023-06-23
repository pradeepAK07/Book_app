import React, { useEffect, useState } from "react";
import "./Hero.css";
import { Cards } from "../Cards/Cards";
import axios from "axios";

export const Hero = () => {
  const [input, setInput] = useState("");
  const [bookData, setBookData] = useState([]);
  const api_key = "AIzaSyCa2uVlMae3qsdsgmrTM8eEcKhUz0BBWeU";

  const getBook = async () => {
    try {
      if (input !== "") {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${input}&key=${api_key}&maxResults=30`
        );
        console.log(setBookData(response.data.items));
      } else {
        alert("enter a book name");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBook();
  }, []);
  return (
    <>
      <div className="container">
        <div className="heading-container">
          <h1 className="heading">Book Collections</h1>
        </div>
        <div className="main">
          <div className="q1-container">
            <h2 className="q1">Find your book of choice</h2>
          </div>
          <div className="quote-container">
            <h4 className="quote">
              "Books are the quietest and most constant of friends; they are the
              most accessible and wisest of counselors, and the most patient of
              teachers." - Charles William Eliot
            </h4>
          </div>
          <div className="input-container">
            <input
              type="search"
              className="input-search"
              placeholder="ENTER THE BOOK NAME..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <br />
            <button className="btn" onClick={getBook}>
              Search Book
            </button>
          </div>
          <div className="img-container">
            <img
              className="image"
              src="data:image/jpeg;base64,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"
              alt="bookimage"
            />
          </div>
        </div>
      </div>
      <div className="card-container">
        {bookData.map((items) => {
          return <Cards items={items} showModal={false} />;
        })}
      </div>
    </>
  );
};
