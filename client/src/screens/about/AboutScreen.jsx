import aboutImg from "./about.jpeg"
import {  Row, Col } from "react-bootstrap";


const AboutScreen = () => {
  return (
        <Row className="mt-4">
          <Col md={6}>
            <img
              src={aboutImg}
              alt="About Us"
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <h2 className="mb-4">Welcome to ImanTiles </h2>
            <p className="text-justify">
            At our company, we take pride in offering premium outdoor tiles
            that redefine the aesthetics and functionality of outdoor spaces. With a commitment to quality and innovation, we specialize in providing a diverse
            range of outdoor tiling solutions tailored to meet the unique needs of our customers.
            </p>
            <p className="text-justify">
            Our extensive selection of outdoor tiles encompasses various styles,
            colors, and textures, allowing you to create stunning outdoor environments 
            that reflect your personal taste and style preferences.
            Whether you're looking to enhance your patio, garden, pool area, 
            or driveway, our tiles are designed to withstand the elements while 
            maintaining their beauty and durability over time.


            </p>
          </Col>
        </Row>
  );
};

export default AboutScreen;
