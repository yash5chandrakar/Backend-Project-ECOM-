import React from 'react'

const EditItem = () => {
    return (
        <div className={styles.outerDiv}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Add an Item</h1>
                <div>
                    <label htmlFor='name'>Name : </label><input value={name} type={'text'} required onChange={(e) => setName(e.target.value)} /> <br />
                    <label htmlFor='price'>Price : </label><input value={price} type={'number'} required onChange={(e) => setPrice(e.target.value)} /> <br />
                    <label htmlFor='brand'>Brand Name : </label><input value={brand} type={'text'} required onChange={(e) => setBrand(e.target.value)} /> <br />
                    <label htmlFor='desc'>Description (Short) : </label><br /> <textarea type={'text'} required onChange={(e) => setDesc(e.target.value)} value={desc} /> <br />
                    <label htmlFor='imageUrl'>Image Url: </label> <input type={'url'} onChange={(e) => setImageUrl(e.target.value)} required /> <br />
                    <input type={'submit'} value="Submit" required />
                </div>
            </form>
        </div>
    )
}

export default EditItem
