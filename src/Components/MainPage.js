import React, { useEffect, useState } from 'react'
import styles from './MainPage.module.css'
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate()

    const [data, setData] = useState([]);
    const [render, setRender] = useState("");
    const [priceToggle, setPriceToggle] = useState(false);
    const [toggleId, setToggleId] = useState("");
    const [entries, setEntries] = useState(0);

    useEffect(() => {
        async function getData() {
            setData("Loading")
            let res = await fetch("/api/getItems").then(res => res.json())
            let sno = 1;
            if (priceToggle === false) {
                res = res.sort((a, b) => a.price - b.price)
            }
            else {
                res = res.sort((a, b) => b.price - a.price)
            }

            setEntries(res.length)
            const myData = (res.map(element => {
                // console.log(element.image)
                return (<tr key={element._id}><td>{sno++}</td>
                    <td>{element.name}</td>
                    <td>{element.brand}</td>
                    <td>{element.highlights}<br />Warranty : {element.warranty} Years</td>
                    <td>{element.price}</td>
                    <td><img src={element.image} alt="Img.jpg"></img></td>
                    <td><button onClick={() => editItem(element.name)}>Edit Item</button></td>
                    <td><button onClick={() => deleteItem(element.name)}>Delete Item</button></td></tr>)
            })
            )
            setData(myData)
        }
        getData()
    }, [render])

    function editItem(itemId) {
        navigate(`/addItemPage/${itemId}`)
        // window.location = `/addItemPage/${itemId}`
    }

    async function deleteItem(elementName) {
        // console.log(elementName)
        const res = await fetch(`/api/deleteItem?name=${elementName}`, {
            method: "DELETE"
        }).then((response) => response.json())
        if (res.operation) {
            alert("Item Deleted Successfully")
            setRender(new Date())
        }
    }

    function sortData() {
        setPriceToggle(!priceToggle)
        if (priceToggle) {
            setToggleId("🢁")
        }
        else {
            setToggleId("🢃")
        }
        setRender(new Date())
        // console.log(priceToggle)
    }

    return (
        <div className={styles.outerDiv}>
            <div className={styles.titleDiv}>
                <h1>Showing All Items</h1>
                <p>Total Entries - {entries}</p>
            </div>

            <div className={styles.tableDiv}>
                <table >
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Name </th>
                            <th>Brand</th>
                            <th>Highlights</th>
                            <th>Price <button onClick={sortData}>Sort {toggleId}</button></th>
                            <th>Image</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data ? data : ""}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default MainPage


