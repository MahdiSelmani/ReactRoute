import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
function AddNewTour({ tour, setTour }) {
    const [name, setName] = useState('');
    const [info, setInfo] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');

    return (

        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
            <Link to='/'> <button style={{borderRadius:'10px', marginTop:'30px', marginBottom:'30px'}}>Return to home page</button></Link>
            <div style={{borderRadius:'10px', boxShadow:' 0 0 10px' ,padding:'20px' ,display: 'flex', flexDirection: 'column', alignItems: 'center' , border:' 1px solid black'}}>
                <h4> Add A New Tour</h4>
                <label>Name</label><input style={{width:'300px', borderRadius:'5px'}} placeholder='Name ..' onChange={(event) => setName(event.target.value)} type={'text'}></input>
                <label>Info</label><input style={{width:'300px', borderRadius:'5px'}} placeholder='Info ..' onChange={(event) => setInfo(event.target.value)} type={'text'}></input>
                <label>Image</label><input style={{width:'300px', borderRadius:'5px'}} placeholder='Image ..' onChange={(event) => setImage(event.target.value)} type={'text'}></input>
                <label>Price</label><input style={{width:'300px', borderRadius:'5px'}} placeholder='Price ..' onChange={(event) => setPrice(event.target.value)} type={'text'}></input>
                <button style={{borderRadius:'10px', marginTop:'50px'}} onClick={name===''?()=> alert('Enter name'): info ===''?()=> alert('Enter Info'): image===''?()=> alert('Enter Image'): price===''?()=> alert('Enter Price'): () => setTour([...tour, {id: Math.random(), name, info, image, price, read: false }])}>Add New Tour
                </button>

            </div>
        </div>
    )
}

export default AddNewTour;
