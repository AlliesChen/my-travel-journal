import React from "react";

export default function Card(props) {
  return (
    <article className="card">
      <img src={props.item.imageUrl} />
      <div className="card--content">
        <div className="locale">
          <img src="./image/icon-position.svg" />
          <p>{props.item.location.toUpperCase()}</p>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{props.item.title}</h2>
        <div className="date">
          {props.item.startDate} - {props.item.endDate}
        </div>
        <div className="description">{props.item.description}</div>
      </div>
    </article>
  );
}
