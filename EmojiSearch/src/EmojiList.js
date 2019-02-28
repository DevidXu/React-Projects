import React from "react";
import PropTypes from "prop-types";
import EmojiResultRow from "./EmojiResultRow";
import "./EmojiList.css";

class EmojiList extends React.Component {
    render() {
        return (
            <div>
                {this.props.emojiData.map(emojiData => (
                    <EmojiResultRow
                        key={emojiData.title}
                        symbol={emojiData.symbol}
                        title={emojiData.title}
                    />
                ))}
            </div>
        );
    }
}

EmojiList.propTypes = {
    emojiData: PropTypes.array,
};

export default EmojiList;