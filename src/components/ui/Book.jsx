import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {
  const [img, setImg] = useState(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    if (!book.url) return; // Handle missing URLs gracefully

    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 300);
    };

    return () => {
      mountedRef.current = false; // Clean up
    };
  }, [book.url]); // Dependency array

  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img-wrapper">
              <img src={img.src} alt={book.title} className="book__img" />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Rating rating={book.rating} />
          <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
        </>
      ) : (
        <>
          <div className="book__img--skeleton" aria-hidden="true"></div>
          <div className="skeleton book__title--skeleton" aria-hidden="true"></div>
          <div className="skeleton book__rating--skeleton" aria-hidden="true"></div>
          <div className="skeleton book__price--skeleton" aria-hidden="true"></div>
        </>
      )}
    </div>
  );
};

export default Book;
