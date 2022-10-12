import React from 'react'
import styles from './ContactMe.module.css'


const ContactMe = () => {

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div className={styles.containerSecond}>
            <div className={styles.headContainer}>
                <h1>Contact Form</h1>
                <p>Enter Your Contact Details Below :-</p>
            </div>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <div>
                            <label className={styles.myLabel} htmlFor='name'>Name :</label>
                        </div>
                        <div>
                            <input type={'text'} placeholder="Enter Your Name" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className={styles.myLabel} htmlFor='name'>Email :</label>
                        </div>
                        <div>
                            <input type={'text'} placeholder="Enter Your Email" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className={styles.myLabel} htmlFor='name'>Feedback :</label>
                        </div>
                        <div>
                            <textarea type={'text'} placeholder="Enter Your Name" />
                        </div>
                    </div>
                    <div className={styles.submitDiv}>
                        <button value={'submit'} type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactMe