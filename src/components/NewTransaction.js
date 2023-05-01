import React from "react"
import{ useState }from "react"

 function NewTransaction({onSubmission}){
    const[formData, setformData]=useState({
        date:"",
        category:'',
        amount:0,
        description:''
    })
    function handleChange(e){
        e.preventDefault()
        setformData({...formData,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        onSubmission(formData)
    }
    return(
        
        <form onChange={handleChange} onSubmit={handleSubmit} id= "new-item-form">
            <div className="form-input">
                <label htmlFor="date">DATE:</label>
                <input value={formData.date}name="date" type="date" id="date"/>
                <input value={formData.category}name="category" className="text-input" placeholder="Category"/>
                <input value={formData.description}name="description" className="text-input" placeholder="Description"/>
                <input value={formData.amount}name="amount" type="number"/>
            </div>
            <button>Add Transaction</button>
        </form>
    )
}

export default NewTransaction;