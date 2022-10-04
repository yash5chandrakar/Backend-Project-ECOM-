import React, { useEffect, useState } from 'react'
import styles from './MainPage.module.css'
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate()

    const [data, setData] = useState([]);
    const [render, setRender] = useState("")

    useEffect(() => {
        async function getData() {
            setData("Loading")
            const res = await fetch("/getItems").then(res => res.json())
            let sno = 1;
            const myData = (
                <table className={styles.tableDiv}>
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {res.map(element => {
                            return (<tr key={element._id}>
                                <td>{sno++}</td>
                                <td>{element.name}</td>
                                <td>{element.brand}</td>
                                <td>{element.price}</td>
                                <td><button onClick={() => editItem(element.name)}>Edit Item</button></td>
                                <td><button onClick={() => deleteItem(element.name)}>Delete Item</button></td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            )
            // console.log(res) /   
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
        const res = await fetch(`/deleteItem?name=${elementName}`, {
            method: "DELETE"
        }).then((response) => response.json())
        if (res.operation) {
            alert("Item Deleted Successfully")
            setRender(new Date())
        }
    }

    return (
        <div className={styles.outerDiv}>
            <h1>Showing All Items</h1>
            {data ? data : ""}
        </div>
    )
}

export default MainPage


