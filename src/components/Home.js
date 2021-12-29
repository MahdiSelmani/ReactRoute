import React from 'react';
import { Carousel } from 'react-bootstrap';
function Home() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img style={{width:'1000px', height:'1000px'}}
                        className="d-block w-100"
                        src="https://c.pxhere.com/photos/3f/99/prague_czech_republic_tower_city_tourism_old_landmark-1188970.jpg!d"
                        alt=""
                    />
                    <Carousel.Caption>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{width:'1000px', height:'1000px'}}
                        className="d-block w-100"
                        src="https://c.pxhere.com/photos/9e/1b/louvre_paris_france_architecture_europe_museum_tourism_historic-924614.jpg!d"
                        alt=""
                    />

                    <Carousel.Caption>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{width:'1000px', height:'1000px'}}
                        className="d-block w-100"
                        src="https://c.pxhere.com/photos/9c/6d/montpellier_france_europe_architecture_building_french_historic_urban-1292316.jpg!d"
                        alt=""
                    />

                    <Carousel.Caption>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home;
