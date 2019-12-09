import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
    {actors.map((actors, index) => (
      <div key={index}>
        <h3>Name: {actors.name}</h3>
        <p>Movies:</p>
        <ul>
          {actors.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
  );
};

export default Actors;
