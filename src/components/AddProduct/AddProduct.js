import { useState } from 'react'
import './AddProduct.css'



function AddProduct({ addProductHandler }) {
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [image, setImage] = useState('')
const [price, setPrice] = useState('')



const titleHandler = (e) => {
    setTitle(e.target.value)
}
const descriptionHandler = (e) => {
    setDescription(e.target.value)
}
const imageHandler = (e) => {
    setImage(e.target.value)
}
const priceHandler = (e) => {
    setPrice(e.target.value)
}
const submitHandler = (e) => {
    e.preventDefault()
    const newProduct = {
        id: Math.random(),
        image,
        title,
        shortDescription: description,
        price,
      }
    addProductHandler(newProduct)
    titleHandler('');
    descriptionHandler('');
    imageHandler('');
    priceHandler('');
    }



    return (
        <>
            <form onSubmit={submitHandler}>
                <label>Add Title:</label>
                <input type="text" value={title} onChange={titleHandler}/>
                <label>Add Description:</label>
                <input type="text" value={description} onChange={descriptionHandler}/>
                <label>Add Image:</label>
                <input type="file" value={image} onChange={imageHandler}/>
                <label>Add Price:</label>
                <input type="number" value={price} onChange={priceHandler}/>
                <button type='submit'>Add Product</button>
            </form>
        </>
    )
}

export default AddProduct