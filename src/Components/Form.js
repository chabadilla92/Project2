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
        <input type="text" onChange={handleChange} value={props.searchTerm} name="searchTerm"/>
        <input type="submit" value="Search"/>
    </form>
}

export default Form