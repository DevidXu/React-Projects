import React from "react";
import "./Header.css";

class Header extends React.Component {
    render() {
        return (
            <div className="component-Header">
                <img
                    src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
                    width="32"
                    height="32"
                    alt=""
                />
                Emoji Search
                <img
                    src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
                    width="32"
                    height="32"
                    alt=""
                />
            </div>
        );
    }
}

export default Header;