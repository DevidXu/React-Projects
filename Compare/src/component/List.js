import React from "react";
import "./List.css";
import Item from "./Item";

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = id => {
        return this.props.handleClick(id);
    }

    render() {
        return (<table className="component-Table"><tbody><tr>
                {
                    this.props.products.map(product =>
                        <td key={product["id"]}>
                            <Item
                                product={product}
                                handleClick={this.handleClick}
                            />
                            </td>
                    )
                }
            </tr></tbody></table>);
    }
};

export default List;