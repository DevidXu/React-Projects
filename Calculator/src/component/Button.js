import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

class Button extends React.Component {
    handleClick = ()=>{
        this.props.clickHandler(this.props.name);
    }

    render() {
        const className = [
            "component-button",
            this.props.orange ? "orange" : "",
            this.props.wide ? "wide" : "",
        ];

        return (
            <div className={className.join(" ").trim()}>
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        );
    }
}

Button.propsType = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
};

export default Button;