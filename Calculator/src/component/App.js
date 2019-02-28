import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: null,
            next: null,
            operation: null,
        };
    }

    handleClick = buttonName => {
        this.setState(calculate(this.state, buttonName));
    }

    render() {
        return (
            <div className="component-app">
                <Display value={this.state.next || this.state.total || "0"}/>
                <ButtonPanel clickHandler={this.handleClick}/>
            </div>
        );
    }
}


function calculate(state, name) {
    var total = state.total;
    var next = state.next;
    var operation = state.operation;

    if ("0123456789.".indexOf(name)!==-1) {
        if (operation === "=") {
            operation = null;
            total = null;
        }
        if (!next) next = "";
        next += name;
    } else if ("+-x/=".indexOf(name)!==-1) {
        if (!operation) total = next;
        else {
            if (!total) total = "0";
            total = fourOperation(total, next, operation);
        }
        next = null; operation = name;
    } else if (name==="AC") {
        total = null; next = null; operation = null;
    } else if (name==="+/-") {
        if (!total) total = next;
        if (!total) total = "0";
        total = fourOperation(0, total, "-");
        operation = "=";
        next = null;
    } else if (name==="%") {
        if (!total) total = next;
        if (!total) total = "0";
        total = fourOperation(total, 100, "/");
        operation = "=";
        next = null;
    }
    return {total: total, next: next, operation: operation};
}

function fourOperation(num1, num2, operation) {
    if (operation === "=") return num1;
    var result = 0;
    if (operation === "+") result = parseFloat(num1) + parseFloat(num2);
    if (operation === "-") result = parseFloat(num1) - parseFloat(num2);
    if (operation === "x") result = parseFloat(num1) * parseFloat(num2);
    if (operation === "/") result = parseFloat(num1) / parseFloat(num2);
    if (Number.isInteger(result)) return Math.ceil(result).toString();
    return result.toString();
}

export default App;