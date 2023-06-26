import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import "./Slider.css";

function Slider({ data }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    console.log(index);
  };
  return (
    <Container fluid className="mt-3">
      <Carousel activeIndex={index} onSelect={handleSelect} id="image-slider">
        {data.map((item) => {
          return (
            <Carousel.Item key={item.image}>
              <img className="d-block w-100" src={item.image} alt="First slide" />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.subTitle}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default Slider;
