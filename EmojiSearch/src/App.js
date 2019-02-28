import React, {Component} from 'react';
import Header from "./Header";
import Search from "./Search";
import EmojiList from "./EmojiList";
import filterEmoji from "./filterEmoji";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: null,
            emojiData: filterEmoji("", 20),
        };
    }

    handleChange = event => {
        this.setState({
            emojiData: filterEmoji(event.target.value, 20),
        });
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Search handleChange={this.handleChange}/>
                <EmojiList emojiData={this.state.emojiData} />
            </div>
        );
    }
}


export default App;
