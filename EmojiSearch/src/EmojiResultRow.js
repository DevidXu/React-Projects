import React from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css"

import "./EmojiResultRow"

class EmojiResultRow extends React.Component {
    render() {
        const codePointHex = this.props.symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

        return (
            <div className="component-Row">
                <img alt={this.props.symbol} src={src}/>
                <span className="title">{this.props.title}</span>
                <span className="info">Click to copy emoji</span>
            </div>
        );
    }
}

EmojiResultRow.propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string
};

export default EmojiResultRow;