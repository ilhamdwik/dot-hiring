/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

export function Card(props: any) {
  return (
    <div className="card">
      <img
        src={props.imageUrl}
        alt="logo thumbnail"
        className="image_thumbnail"
      />
      <div className="card_container">
        <h4><b>John Doe</b></h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
}

export default Card;
