import React, { useState } from 'react';

export default function ExampleF() {
    // useState is a new way to use the exact same capabilities
    // that this.state provides in a class
    const [count, setCount] = useState(0);
    // Declare a new state variable by calling the useState Hook.
    // We initialize it to zero by passing 0 as the only useState argument.
    // The second returned item is itself a function. It lets us update the count so we’ll name it setCount.

    return (
        // When the user clicks, we call setCount with a new value. React will then re-render the Example component, passing the new count value to it.
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => {
                setCount(count + 1);
                console.log("useState: ", count + 1);
            }}>
                Click me! (useState)
            </button>
        </div>
    );
}