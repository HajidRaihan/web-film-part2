import React from "react";
import { Card, Container, Button } from "react-bootstrap";

const NowPlaying = ({ data }) => {
  return (
    <div className="mt-3">
      <Container>
        <h1>Now Playing</h1>
        <div className="movie-container">
          {data.map(function (item) {
            return (
              <div className="movie-wrapper" key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt=""
                  className="movie-image"
                />

                <div className="movie-title">{item.title}</div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default NowPlaying;
