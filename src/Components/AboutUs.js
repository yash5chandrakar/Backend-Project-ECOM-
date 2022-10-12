import React from 'react'
import styles from "./AboutUS.module.css"

const AboutUs = () => {
    return (
        <div className={styles.outerAboutDiv}>
            <h1>About Us</h1>
            <div className={styles.contentDiv}>
                <h2 className={styles.subTitle}>#Database Editor for E-COM Project</h2>
                <p>This is a database editor app which you can use to edit your database content, add new items and basically manage your database easily. It features good UI and has several functions which are suited to your needs.</p>
                <h2 className={styles.subTitle}>#Tech Stacks Used </h2>
                <p>Tech Stacks used in this project are :- <br />
                    <ol>
                        <li>Node JS</li>
                        <li>React JS</li>
                        <li>Express JS</li>
                        <li>MongoDB</li>
                    </ol>
                </p>
                <h2 className={styles.subTitle}>#Inspiration</h2>
                <p>The idea to build this project came after i decided to build a full functioning E-Com Website. Basically i need to manage my database in a good manner so that it can be maintained when i start to use my E-COM Website. Maintaining Data which are needed for the website to work is a crucial job for a Full Stack Developer. Also i needed to take into account that these data can be changed at any time and the Main Website should reflect this positively. I learned various things from this project and it has accounted to my great growth in my backend skills.</p>
                <h2 className={styles.subTitle}>#API Calls</h2>
                <p>Various APIs provide means to add, delete, edit an item in the database. They are as follows :- <br />
                    <ol>
                        <li>"/api/getSingleItem" - for getting a single Item (for Edit).</li>
                        <li>"/api/getItems" - To get all items present in DB.</li>
                        <li>"/api/addItems" - To add Item in the DB.</li>
                        <li>"/api/deleteItem" - To Delete an Item in DB.</li>
                    </ol>
                </p>
                <h2 className={styles.subTitle}>#Pages</h2>
                <p>
                    <ul className={styles.aboutList}>
                        <li>
                            <p><strong>Main Page</strong> :- This page displays all data present in the DB.</p>
                            <img src='https://i.imgur.com/r4HOJXL.png' alt='MainPage.png' />
                        </li>
                        <li>
                            <p><strong>Add Item Page</strong>  :- In this page you can enter details for the product and then submit it to the DB.</p>
                            <img src='https://i.imgur.com/pzECSTK.png' alt='AddItem.png' />
                        </li>
                        <li>
                            <p><strong>Edit Item</strong>  :- When Edit Item is clicked user is moved to the add item page with all details automatically entered in the respective inputs for easier editing.</p>
                            <img src="https://i.imgur.com/5Xmw8ZA.png" alt="EditItem.png" />
                            <h1 align="center">🢃</h1>
                            <img src="https://i.imgur.com/qXE9ji2.png" alt="ItemDetails.png" />
                        </li>
                        <li>
                            <p><strong>Contact Form</strong>  :- Here you can provide feedback using this form to the backend Team.</p>
                            <img src="https://i.imgur.com/158yYiW.png" alt="Contact.png" />
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    )
}

export default AboutUs
