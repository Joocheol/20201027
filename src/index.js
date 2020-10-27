import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map((b) => {
        return <Book key={b.id} {...b}></Book>;
      })}
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>,
  rootElement
);
