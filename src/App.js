import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Quote from "./components/Quote";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    axios.get(url).then((res) => {
      let data = res.data.quotes;
      let quoteNum = Math.floor(Math.random() * data.length); //quote number
      let randomQuote = data[quoteNum]; //actual quote

      this.setState({
        quote: randomQuote["quote"],
        author: randomQuote["author"],
      });
    });
  }

  getNewQuote = () => {
    this.getQuote();
  };

  render() {
    const { author, quote } = this.state;
    return (
      <div id="wrapper">
        <div id="quote-box" className="card border-success mb-3 text-center">
          <div className="card-header">
            <h3>Random Quote Generator</h3>
          </div>
          <div className="card-body text-success">
            <Quote quote={quote} author={author} />
            <div className="buttons">
              <a
                className="button btn btn-outline-success"
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text=${quote} ${author}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Quote of the day!"
              >
                <span>
                  <i className="fab fa-twitter twitter-icon" />
                </span>
              </a>

              <button
                className="button btn btn-outline-success"
                id="new-quote"
                onClick={this.getNewQuote}
              >
                New quote
              </button>
            </div>
          </div>
        </div>
        <footer>
          by{" "}
          <a
            href="https://codepen.io/sid2021"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            sid2021{" "}
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
