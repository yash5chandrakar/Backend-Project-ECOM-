import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from "./AddItems.module.css"

const AddItems = () => {
    const params = useParams()
    // console.log(params)

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


    useEffect(() => {
        if (params.id && params.id !== "") {
            async function getItem() {
                const res = await fetch(`/api/getSingleItem?id=${params.id}`, {
                    method: "GET",
                }).then((resp => resp.json()))
                setImageUrl(res.image)
                setName(res.name)
                setPrice(res.price)
                setBrand(res.brand)
                setDesc(res.desc)
                setWarranty(res.warranty)
                // console.log(res.highlights)

                if (res.highlights && res.highlights[0] !== "") {
                    setHighlights1(res.highlights[0])
                }
                if (res.highlights && res.highlights[1] !== "") {
                    setHighlights2(res.highlights[1])
                }
                if (res.highlights && res.highlights[2] !== "") {
                    setHighlights3(res.highlights[2])
                }
                if (res.highlights && res.highlights[3] !== "") {
                    setHighlights4(res.highlights[3])
                }
            }
            getItem()
        }
    }, [params])

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

        const res = await fetch("/api/addItems", {
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
                    <div >
                        <label htmlFor='name' >Name : </label>
                    </div>
                    <div >
                        <input value={name} type={'text'} required onChange={(e) => setName(e.target.value)} placeholder="Enter Product Name" /> <br />
                    </div>
                </div>
                <div className={styles.row}>
                    <div >
                        <label htmlFor='price'>Price : </label>
                    </div>
                    <div >
                        <input value={price} type={'text'} required onChange={(e) => setPrice(e.target.value)} placeholder="Enter Procuct Price" /> <br />
                    </div>
                </div>
                <div className={styles.row}>
                    <div >
                        <label htmlFor='brand'>Brand Name : </label>
                    </div>
                    <div >
                        <input value={brand} type={'text'} required onChange={(e) => setBrand(e.target.value)} placeholder="Enter Brand Name" /> <br />
                    </div>
                </div>
                <div className={styles.row}>
                    <div >
                        <label htmlFor='highlights'>Highlights : <br /> (Features)</label>
                    </div>
                    <div >
                        <input value={highlights1} type={'text'} required onChange={(e) => setHighlights1(e.target.value)} placeholder="Enter Highlight 1" />
                        <input value={highlights2} type={'text'} required onChange={(e) => setHighlights2(e.target.value)} placeholder="Enter Highlight 2" /> <br />
                        <input value={highlights3} type={'text'} required onChange={(e) => setHighlights3(e.target.value)} placeholder="Enter Highlight 3" />
                        <input value={highlights4} type={'text'} required onChange={(e) => setHighlights4(e.target.value)} placeholder="Enter Highlight 4" /> <br />
                    </div>
                </div>
                <div className={styles.row}>
                    <div >
                        <label htmlFor='desc'>Description (Short) : </label>
                    </div>
                    <div >
                        <textarea type={'text'} required onChange={(e) => setDesc(e.target.value)} value={desc} placeholder="Enter Product Description" /> <br />
                    </div>
                </div>
                <div className={styles.row}>
                    <div>
                        <label htmlFor='imageUrl'>Image Url: </label>
                    </div>
                    <div >
                        <input type={'text'} value={imageFile} onChange={(e) => setImageUrl(e.target.value)} placeholder="Enter Image URL" required /> <br />
                    </div>
                </div>
                <div className={styles.row}>
                    <div >
                        <label htmlFor='imageUrl'>Warranty Period(in Years) : </label>
                    </div>
                    <div >
                        <input id={styles.warranty} type={'number'} min="0" max="10" value={warranty} onChange={(e) => setWarranty(e.target.value)}
                            placeholder="Enter Warranty Period" required />
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


