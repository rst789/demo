import React from "react";

// auto increment count value in console
// when clicked button
export class ExampleC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1 });
                    console.log("without useState: ", this.state.count + 1);
                }}>
                    Click me!! (without useState)
                </button>
            </div>
        );
    }
}

//useState is a Hook that lets you add React state to function components.