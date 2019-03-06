import React from "react";
import "./Item.css";

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.product.id,
        };
    }

    handleClick = () => this.props.handleClick(this.state.id);

    render() {
        return (<div className={"component-Item" + (this.props.product["selected"]?" selectedDiv":"")}>
            <img className={this.props.product["selected"]?"selectedImg":""} src={this.props.product.image} alt={this.props.product.name}/>
            <button className="Compare" onClick={this.handleClick}>{this.props.product.selected?"REMOVE":"COMPARE"}</button>
            <div className="Info">
                <div className="L1">
                    <div className="Name">{this.props.product.name}</div>
                    <div className="Price">{this.props.product.price}</div>
                </div>
                <div className="L2">{this.props.product.description}</div>
            </div>
        </div>);
    }
}

export default Item;