import React from 'react'

const Form = (props) => {
    // state to fold the forms data
    const [form, setForm] = React.useState({
        searchTerm: ""
    })

    // handle change function
    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    };

    // handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault()
        props.search(form.searchTerm)
    }

    return <form onSubmit={handleSubmit}>
        <input className="search" type="text" onChange={handleChange} value={props.searchTerm} name="searchTerm" placeholder="Name, Position.."/>
        <button className="searchButton" type="submit" value="Search"><i class="fa fa-search"></i></button>
    </form>
}

export default Form