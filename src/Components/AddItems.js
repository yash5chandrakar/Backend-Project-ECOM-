import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from "./AddItems.module.css"

const AddItems = () => {
    const params = useParams()
    // console.log(params)

    useEffect(() => {
        if (params.id && params.id !== "") {
            async function getItem() {
                const res = await fetch(`/getSingleItem?id=${params.id}`, {
                    method: "GET",
                }).then((resp => resp.json()))

                setName(res.name)
                setPrice(res.price)
                setBrand(res.brand)
                setDesc(res.desc)
                setImageUrl(res.image)
            }
            getItem()
        }
    }, [params])


    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [brand, setBrand] = useState("")
    const [desc, setDesc] = useState("")
    const [imageFile, setImageUrl] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()

        const myData = {
            name: name,
            price: price,
            brand: brand,
            desc: desc,
            image: imageFile
        }

        const res = await fetch("/addItems", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(myData)
        })


        if (res.ok) {
            alert("Data Added Successfully")
            setBrand("")
            setDesc("")
            setName("")
            setPrice("")
            setImageUrl("")
        }
        else {
            alert("Error! Some Details were incorrect.")
        }
    }
    return (
        <div className={styles.outerDiv}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Add an Item</h1>
                <div>
                    <label htmlFor='name'>Name : </label><input value={name} type={'text'} required onChange={(e) => setName(e.target.value)} /> <br />
                    <label htmlFor='price'>Price : </label><input value={price} type={'number'} required onChange={(e) => setPrice(e.target.value)} /> <br />
                    <label htmlFor='brand'>Brand Name : </label><input value={brand} type={'text'} required onChange={(e) => setBrand(e.target.value)} /> <br />
                    <label htmlFor='desc'>Description (Short) : </label><br /> <textarea type={'text'} required onChange={(e) => setDesc(e.target.value)} value={desc} /> <br />
                    <label htmlFor='imageUrl'>Image Url: </label> <input type={'text'} onChange={(e) => setImageUrl(e.target.value)} required /> <br />
                    <input type={'submit'} value="Submit" required />
                </div>
            </form>
        </div>
    )
}

export default AddItems

// More things to include :- tags[], highlights,ratings
