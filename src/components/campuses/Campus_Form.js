import React from 'react';

const AddCampusForm = ({ onAddCampus, onCancel }) => {

    const [form, setForm] = React.useState({
        name: "",
        imgUrl: '',
        address: '',
        description: ''
    });

    const handleChange = prop => event => {
        setForm({
            ...form,
            [prop]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        onAddCampus(form);
    }

    return (
        <div className="add-campus-form">
            <h1>ADD A NEW CAMPUS</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={form.name} onChange={handleChange("name")} placeholder={'Campus Name'} /><br />
                <input type='text' value={form.imgUrl} onChange={handleChange("imgUrl")} placeholder={'Image URL'} /><br />
                <input type='text' value={form.address} onChange={handleChange("address")} placeholder={'Address'} /><br />
                <input type='description' value={form.description} onChange={handleChange("description")} placeholder={'Description'} /><br />
                <button type='submit'>Submit</button>
                <button type='button' onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
}

export default AddCampusForm;
