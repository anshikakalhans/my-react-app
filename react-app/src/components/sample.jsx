import React, { Component, useState } from 'react';

function Sample(props) {
  const [name, setName] = useState("Anshika");
  const [age, setAge] = useState(18);

  return (
    <div>
      <h2>Trending topics</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae
        maiores, nobis la
      </p>

      <h3>{name}</h3>

      <button onClick={() => {
        setName("Alex");
      }}>
        Name Change
      </button>

      <button
        className="counter"
        onClick={() => props.setCount((count) => count + 1)}
      >
        Count is {props.count}
      </button>
    </div>
  );
}

export default Sample;