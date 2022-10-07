import React, { useEffect, useState } from 'react'
import styles from "./AddItems.module.css"

const AddItems = () => {
    const params = useParams()
    console.log(params)

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
        <div className={styles.container}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Add an Item</h1><br/>
                <p>You can add and edit your details of your item price, description etc. </p><br/>
                <div className={styles.row}>
                    <div className={styles.col-25}>
                       <label htmlFor='name' >Name : </label>
                    </div>
                    <div className={styles.col-75}>
                       <input  value={name} type={'text'} required onChange={(e) => setName(e.target.value)} /> <br />
                    </div>
                </div>
                <div className={styles.row}>
                   <div className={styles.col-25}>    
                      <label htmlFor='price'>Price : </label>
                    </div>
                    <div className={styles.col-75}>
                      <input value={price} type={'text'} required onChange={(e) => setPrice(e.target.value)} /> <br />
                    </div>
                </div>
                <div className={styles.row}>
                   <div className={styles.col-25}>  
                      <label htmlFor='brand'>Brand Name : </label>
                    </div>
                    <div className={styles.col-75}>
                      <input value={brand} type={'text'} required onChange={(e) => setBrand(e.target.value)} /> <br />
                    </div>
                </div>
                <div className={styles.row}>
                   <div className={styles.col-25}>  
                      <label htmlFor='highlights'>Highlights : </label>
                    </div>
                    <div className={styles.col-80}>
                      <input  value={brand} type={'text'} required onChange={(e) => setBrand(e.target.value)} /> 
                      <input  value={brand} type={'text'} required onChange={(e) => setBrand(e.target.value)} /> <br />
                      <input  value={brand} type={'text'} required onChange={(e) => setBrand(e.target.value)} /> 
                      <input  value={brand} type={'text'} required onChange={(e) => setBrand(e.target.value)} /> <br />
                    </div>
                </div>
                <div className={styles.row}>
                   <div className={styles.col-25}>
                      <label htmlFor='desc'>Description (Short) : </label><br /> 
                   </div>
                   <div className={styles.col-75}>
                      <textarea  type={'text'} required onChange={(e) => setDesc(e.target.value)} value={desc} /> <br />
                   </div>
                </div>
                <div className={styles.row}>
                   <div className={styles.col-25}>
                      <label htmlFor='imageUrl'>Image Url: </label> 
                    </div>
                    <div className={styles.col-75}>
                      <input  type={'text'} onChange={(e) => setImageUrl(e.target.value)} required /> <br />
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
