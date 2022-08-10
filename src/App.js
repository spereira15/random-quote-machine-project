import React, { useEffect } from "react";
// import { render } from "react-dom";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          quote: "That which does not kill us makes us stronger",
          author: "Friedrich Nietzsche"
        },
        {
          quote: "The journey of a thousand miles begins with one step.",
          author: "Lao Tzu"
        },
        {
          quote: "Life is what happens when you’re busy making other plans.",
          author: "John Lennon"
        },
        {
          quote: "When the going gets tough, the tough get going.",
          author: "Joe Kennedy"
        },
        {
          quote: "You must be the change you wish to see in the world.",
          author: "Mahatma Gandhi"
        },
        {
          quote: "You only live once, but if you do it right, once is enough.",
          author: "Mae West"
        },
        {
          quote: "Tough times never last but tough people do.",
          author: "Robert H. Schuller"
        },
        {
          quote: "Get busy living or get busy dying",
          author: "Stephen King"
        },
        {
          quote: "Whether you think you can or you think you can’t, you’re right.",
          author: "Henry Ford"
        },
        {
          quote: "Tis better to have loved and lost than to have never loved at all.",
          author: "Alrded Lord Tennyson"
        },
        {
          quote: "A man is but what he knows.",
          author: "Sir Francis Bacon"
        },
        {
          quote: "You miss 100 percent of the shots you never take",
          author: "Wayne Gretzky"
        },
        {
          quote: "If you’re going through hell, keep going.",
          author: "Winston Churchill"
        },
        {
          quote: "Strive not to be a success, but rather to be of value",
          author: "Albert Einstein"
        },
        {
          quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
          author: "Eleanor Roosevelt"
        }
      ]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.setState(this.randomQuote)
  }

  randomQuote() {
    return this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
  }
  handleClick() {
    this.setState(this.randomQuote)
    //document.body.style.backgroundColor = ""
  }

  render() {
    return (
      <div className="container position-absolute top-50 start-50">
        <div id="quote-box">
          <div id="quotes">
            <p id="text" className="text-center">"{this.state.quote}"</p>
            <p id="author" className="text-end fst-italic">- {this.state.author}</p>
          </div>
          <div id="buttons">
            <button id="new-quote" type="button" title="Change quote" class="btn btn-dark btn-lg" onClick={this.handleClick}>New Quote</button>
            <a id="tweet-quote" href={'https://twitter.com/intent/tweet?text='+'"'+this.state.quote+'"'+' - '+this.state.author}><button id="tweet-button" type="button" title="Share this quote on Twitter" class="btn btn-primary btn-lg"><i class="bi bi-twitter"></i></button></a>
          </div>
        </div>
        <footer className="text-center">by Simon Pereira</footer>
      </div>
    )
  }
}

export default App;
