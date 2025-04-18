import React from 'react';
function Hello(props)
{
    const name="ishika";
    return <div><h1>Hello , {name} !!</h1>
    <h2>Today's date :: {props.date} !!</h2>
    <button >click me ! </button></div>
}
export default Hello;