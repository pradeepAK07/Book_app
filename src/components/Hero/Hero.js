import React, { useEffect, useState } from "react";
import "./Hero.css";
import { Cards } from "../Cards/Cards";
import axios from "axios";

export const Hero = () => {
  const [input, setInput] = useState("");
  const [bookData, setBookData] = useState([]);
  const api_key = "AIzaSyCa2uVlMae3qsdsgmrTM8eEcKhUz0BBWeU";
  console.log(bookData);
  const getBook = async () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${input}&key=${api_key}`
      )
      .then((res) => setBookData(res.data.items))
      .catch((res) => console.log(res));
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
              placeholder="enter the book name..."
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
              src="https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
