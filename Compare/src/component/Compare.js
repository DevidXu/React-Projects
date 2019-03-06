import React from "react";
import "./Compare.css";

class Compare extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            width: 1150,
        }
    }

    render() {
        var products = [];
        for (let i=0;i<this.props.products.length;i++) {
            if (this.props.products[i].selected)
                products.push(this.props.products[i]);
        }
        var len = products.length;
        if (len <= 1) return (<div></div>);

        var width = Math.floor(this.state.width/(len+1));
        var firstRow = [<th key='0' style={{width: width}}></th>];
        var secondRow = [<th key='0' style={{width: width}}>Price</th>];
        var thirdRow = [<th key='0' style={{width: width}}>Colors</th>];
        var forthRow = [<th key='0' style={{width: width}}>Condition</th>];
        for (let i=0;i<len;i++) {
            firstRow.push(<td key={i+1} style={{width: width}}>{products[i].name}</td>);
            secondRow.push(<td key={i+1} style={{width: width}}>{products[i].price}</td>);
            thirdRow.push(
                <td key={i+1} style={{width: width}}>
                    {products[i].colors.map((color, k) =>
                        <div key={k} className="ColorBlock"><div className={"block bg-"+color} /></div>) }
                </td>);
            forthRow.push(
                <td key={i+1} style={{width: width}} className={products[i].condition=="Fresh"?"Fresh":"Frozen"}>
                {products[i].condition}
                </td>);
        }

        var table = [];
        table.push(firstRow);
        table.push(secondRow);
        table.push(thirdRow);
        table.push(forthRow);

        for (let i=0;i<len;i++)
        return (<div>
            <table className="component-Compare" style={{width: this.state.width}}><tbody>
            {
                table.map((row, i) =>
                    <tr key={i}>{row}</tr>
                )
            }
            </tbody></table>
        </div>);
    }
}

export default Compare;