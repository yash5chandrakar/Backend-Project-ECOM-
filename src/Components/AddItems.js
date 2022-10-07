import React, { useEffect, useState } from 'react'
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
<<<<<<< HEAD
    }

    useEffect(() => {
        if (params.id && params.id !== "") {
            async function getItem() {
                const res = await fetch(`/getSingleItem?id=${params.id}`, {
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
                        <input value={name} type={'text'} required onChange={(e) => setName(e.target.value)} placeholder="Enter Name of Product" /> <br />
                    </div>
                </div>
                <div className={styles.row}>
                    <div >
                        <label htmlFor='price'>Price : </label>
                    </div>
                    <div >
                        <input value={price} type={'text'} required onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price of Product" /> <br />
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
                        <label htmlFor='highlights'>Highlights : </label>
                    </div>
                    <div >
                        <input value={highlights1} type={'text'} required onChange={(e) => setHighlights1(e.target.value)} placeholder="Enter Highlight 1" />
                        <input value={highlights2} type={'text'} required onChange={(e) => setHighlights2(e.target.value)} placeholder="Enter Highlight 2" />
                        <input value={highlights3} type={'text'} required onChange={(e) => setHighlights3(e.target.value)} placeholder="Enter Highlight 3" />
                        <input value={highlights4} type={'text'} required onChange={(e) => setHighlights4(e.target.value)} placeholder="Enter Highlight 4" />
                    </div>
                </div>
                <div className={styles.row}>
                    <div >
                        <label htmlFor='desc'>Description (Short) : </label>
                    </div>
                    <div >
                        <textarea type={'text'} required onChange={(e) => setDesc(e.target.value)} value={desc} placeholder="Enter some description of Product..." /> <br />
                    </div>
                </div>
                <div className={styles.row}>
                    <div >
                        <label htmlFor='imageUrl'>Image Url: </label>
                    </div>
                    <div >
                        <input type={'text'} value={imageFile} onChange={(e) => setImageUrl(e.target.value)}
                            placeholder="Enter Image URL" required />
                    </div>
                </div>
                <div className={styles.row}>
                    <div >
                        <label htmlFor='imageUrl'>Warranty Period(in Years) : </label>
                    </div>
                    <div >
                        <input id={styles.warranty} type={'number'} min="0" max="10" value={warranty} onChange={(e) => setWarranty(e.target.value)}
                            placeholder="Enter Warranty Period" required />
=======
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
>>>>>>> a8c62fb87bf3395bbd1c422320dea23630cdac31
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
<<<<<<< HEAD

// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import styles from "./AddItems.module.css"

// const AddItems = () => {
//     const params = useParams()
//     // console.log(params)

//     useEffect(() => {
//         if (params.id && params.id !== "") {
//             async function getItem() {
//                 const res = await fetch(`/getSingleItem?id=${params.id}`, {
//                     method: "GET",
//                 }).then((resp => resp.json()))

//                 setName(res.name)
//                 setPrice(res.price)
//                 setBrand(res.brand)
//                 setDesc(res.desc)
//                 setImageUrl(res.image)
//             }
//             getItem()
//         }
//     }, [params])


//     const [name, setName] = useState("")
//     const [price, setPrice] = useState("")
//     const [brand, setBrand] = useState("")
//     const [desc, setDesc] = useState("")
//     const [imageFile, setImageUrl] = useState("")

//     async function handleSubmit(e) {
//         e.preventDefault()

//         const myData = {
//             name: name,
//             price: price,
//             brand: brand,
//             desc: desc,
//             image: imageFile
//         }

//         const res = await fetch("/addItems", {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json"
//             },
//             body: JSON.stringify(myData)
//         })


//         if (res.ok) {
//             alert("Data Added Successfully")
//             setBrand("")
//             setDesc("")
//             setName("")
//             setPrice("")
//             setImageUrl("")
//         }
//         else {
//             alert("Error! Some Details were incorrect.")
//         }
//     }
//     return (
//         <div className={styles.outerDiv}>
//             <form onSubmit={(e) => handleSubmit(e)}>
//                 <h1>Add an Item</h1>
//                 <div>
//                     <label htmlFor='name'>Name : </label><input value={name} type={'text'} required onChange={(e) => setName(e.target.value)} /> <br />
//                     <label htmlFor='price'>Price : </label><input value={price} type={'number'} required onChange={(e) => setPrice(e.target.value)} /> <br />
//                     <label htmlFor='brand'>Brand Name : </label><input value={brand} type={'text'} required onChange={(e) => setBrand(e.target.value)} /> <br />
//                     <label htmlFor='desc'>Description (Short) : </label><br /> <textarea type={'text'} required onChange={(e) => setDesc(e.target.value)} value={desc} /> <br />
//                     <label htmlFor='imageUrl'>Image Url: </label> <input type={'text'} onChange={(e) => setImageUrl(e.target.value)} required /> <br />
//                     <input type={'submit'} value="Submit" required />
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default AddItems

// More things to include :- tags[], highlights,ratings
=======
>>>>>>> a8c62fb87bf3395bbd1c422320dea23630cdac31
