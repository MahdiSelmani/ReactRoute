import React from 'react'
import { Link } from 'react-router-dom'
function Details(props) {
    const find = props.tour.find(el => el.id == props.match.params.x)
    return (
        <div>
            <img src={find.image} alt='...' />
            <h2>{find.name}</h2>
            <div>
                <p> {find.info}    </p>
                <Link to={'/OurTours'}> <button style={{ borderRadius: '10px', marginTop: '30px', marginBottom: '30px' }}>Previous</button></Link>
                <Link to={'/'}> <button style={{ borderRadius: '10px', marginTop: '30px', marginBottom: '30px' }}>Home Page</button></Link>
            </div>

        </div>
    )
}

export default Details;
