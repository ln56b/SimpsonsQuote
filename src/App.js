import React from 'react';
import axios from 'axios';
import SimpsonsQuote from './components/SimpsonsQuote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote : ''
    };
    this.getQuote = this.getQuote.bind(this);
  }
  getQuote() {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          quote: data[0],
        });
    });
  }

  render() {
    return (
      <div className="App">
        <SimpsonsQuote 
        quote = {this.state.quote}
        />
        <button type="button" onClick={this.getQuote}>Get quote</button>

      </div>
    );
  }
  }

export default App;
