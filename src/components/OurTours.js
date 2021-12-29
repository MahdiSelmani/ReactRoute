import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';
function OurTours({ tour, setTour,word }) {
    const [arr, setArr] = useState(tour)
    function del(id) {
        setTour(tour.filter(el => el.id !== id))
    }
    function Read(id) {
        setTour(tour.map(el => el.id === id ? { ...el, read: !el.read } : el))
    }

    return (
        
        <div>
            <Link to='/'> <button style={{borderRadius:'10px', marginTop:'30px', marginBottom:'30px'}} >Return to home page</button></Link>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {tour.filter(el =>  el.name.toUpperCase().includes(word.toUpperCase())).map(el => <div key={el.id}>

                    <Card style={{ width: '18rem',borderRadius:'10px', boxShadow:'0 0 10px' } }>
                        <Card.Img variant="top" src={el.image} style={{ height: '200px' }} />
                        <Card.Body>
                            <Card.Title>{el.name}</Card.Title>
                            <Card.Text>
                        {el.read ? el.info : el.info.slice(0, 100) + '...'} <button style={{borderRadius:'10px'}} onClick={() => Read(el.id)}>{el.read ? "read less" : "read more"}</button>
                               
                            </Card.Text>
                            <Button variant="danger" onClick={() => del(el.id)}>Not Interested</Button>
                            <Link to={`/Details/${el.id}`}>
                                <Button>More details</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>)}

            </div>
            {tour.length === 0 && <button style={{backgroundColor:'Pink', borderRadius:'10px'}} onClick={() => setTour(arr)} >Refresh</button>}
        </div>
    )
}

export default OurTours;
