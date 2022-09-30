import React from "react";

export class ExampleEffClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`;
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1 });
                    console.log("without useEffect: ", this.state.count + 1);
                    console.log("Title: ", document.title, "w/o useEffect");
                }}>
                    Click me!!!! (without useEffect)
                </button>
            </div>
        );
    }
}