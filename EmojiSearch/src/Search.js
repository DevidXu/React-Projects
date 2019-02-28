import React from "react";
import PropTypes from "prop-types";

import "./Search.css";

class Search extends React.Component {
    handleChange = event => {
        this.props.handleChange(event);
    }

    render() {
        return (
            <div className="component-Search">
                <input className="SearchBox" type="text" onChange={this.handleChange} />
            </div>
        );
    }
}

Search.propTypes = {
    handleChange: PropTypes.func,
};

export default Search;