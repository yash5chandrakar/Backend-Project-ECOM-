import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from "./AddItems.module.css"

const AddItems = () => {
    const params = useParams()
    console.log(params)

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [brand, setBrand] = useState("")
    const [desc, setDesc] = useState("")
    const [imageFile, setImageUrl] = useState("")
    const [highlights1, setHighlights1] = useState("")
    const [highlights2, setHighlights2] = useState("")
    const [highlights3, setHighlights3] = useState("")
    const [highlights4, setHighlights4] = useState("")
    const [warranty, setWarranty] = useState("")




    async function handleSubmit(e) {
        e.preventDefault()

        const highlights = [];
        if (highlights1 !== "") {
            highlights.push(highlights1)
        }
        if (highlights2 !== "") {
            highlights.push(highlights2)
        }
        if (highlights3 !== "") {
            highlights.push(highlights3)
        }
        if (highlights4 !== "") {
            highlights.push(highlights4)
        }

        const myData = {
            name: name,
            price: price,
            brand: brand,
            desc: desc,
            image: imageFile,
            highlights: highlights,
            warranty: warranty
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
            setHighlights1("")
            setHighlights2("")
            setHighlights3("")
            setHighlights4("")
            setWarranty("")
        }
        else {
            alert("Error! Some Details were incorrect.")
        }
    }
    return (
        <div className={styles.container}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Add an Item</h1><br />
                <p>You can add and edit your details of your item price, description etc. </p><br />
                <div className={styles.row}>
                    <div className={styles.col - 25}>
                        <label htmlFor='name' >Name : </label>
                    </div>
                    <div className={styles.col - 75}>
                        <input value={name} type={'text'} required onChange={(e) => setName(e.target.value)} /> <br />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col - 25}>
                        <label htmlFor='price'>Price : </label>
                    </div>
                    <div className={styles.col - 75}>
                        <input value={price} type={'text'} required onChange={(e) => setPrice(e.target.value)} /> <br />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col - 25}>
                        <label htmlFor='brand'>Brand Name : </label>
                    </div>
                    <div className={styles.col - 75}>
                        <input value={brand} type={'text'} required onChange={(e) => setBrand(e.target.value)} /> <br />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col - 25}>
                        <label htmlFor='highlights'>Highlights : </label>
                    </div>
                    <div className={styles.col - 80}>
                        <input value={brand} type={'text'} required onChange={(e) => setBrand(e.target.value)} />
                        <input value={brand} type={'text'} required onChange={(e) => setBrand(e.target.value)} /> <br />
                        <input value={brand} type={'text'} required onChange={(e) => setBrand(e.target.value)} />
                        <input value={brand} type={'text'} required onChange={(e) => setBrand(e.target.value)} /> <br />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col - 25}>
                        <label htmlFor='desc'>Description (Short) : </label><br />
                    </div>
                    <div className={styles.col - 75}>
                        <textarea type={'text'} required onChange={(e) => setDesc(e.target.value)} value={desc} /> <br />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.col - 25}>
                        <label htmlFor='imageUrl'>Image Url: </label>
                    </div>
                    <div className={styles.col - 75}>
                        <input type={'text'} onChange={(e) => setImageUrl(e.target.value)} required /> <br />
                    </div>
                </div>
                <div className={styles.submitBtn}>
                    <input type={'submit'} value="Submit" required />
                </div>
            </form>
        </div>
    )
}

export default AddItems;
