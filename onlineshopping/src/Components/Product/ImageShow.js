import React from "react";
import {Carousel} from "react-bootstrap";
import Tshirt from "../LoggeHome/tshirt.jpg";


export default function ImageShow(props){


    return (
        <div >

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Tshirt}
                    alt="First slide"
                    height="560"

                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Tshirt}
                    alt="Third slide"
                    height="560"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Tshirt}
                    alt="Third slide"
                    height="560"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    </div>)
}
