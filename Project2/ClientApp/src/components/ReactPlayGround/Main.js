import React, { Component, useState } from 'react';

export function Main() {

    return (
        <MyButton message = "gksdgsdogdsfk" />)
        ;

}



function MyButton({ message }) {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }


    return (
        <div>
            <button onClick={handleClick}>
                Click me {count} {message}
            </button>
        </div>
    );

}
