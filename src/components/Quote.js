import React, { Component } from "react";

const Quote = ({ quote, author }) => {
  return (
    <React.Fragment>
      <div id="text">
        <p>
          <i>"{quote}"</i>
        </p>
      </div>
      <div id="author">
        <p>
          <b>- {author}</b>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Quote;
