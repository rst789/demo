import React from 'react';

export default function ExampleEffect4() {
    const [counter, setCounter] = React.useState(0);

    React.useEffect(() => {
        const s = setInterval(() => {
            setCounter(c => c + 1);
        }, 1000);

        return () => clearInterval(s);
    }, [counter]);

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Counter: {counter}</h1>
        </div>
    );
}