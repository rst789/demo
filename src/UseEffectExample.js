import React, { useState, useEffect } from 'react';

export default function ExampleEff() {
    //We declare the count state variable, and then we tell React we need to use an effect.
    const [count, setCount] = useState(0);

    // We pass a function to the useEffect Hook. This function we pass is our effect.
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() =>{
                console.log("useEffect: ", count + 1);
                console.log("Title: ",document.title, "w/ useEffect");
                setCount(count + 1)
            }}>
                Click me!!! (useEffect)
            </button>
        </div>
    );
}