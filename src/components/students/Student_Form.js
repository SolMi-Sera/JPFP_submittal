import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'

import { selectCampuses } from '../../features/campusesSlice'
import Student from './Student'

import { selectStudents } from '../../features/studentsSlice'
import { addStudentAsync } from '../../features/studentsSlice'
import StudentsList from './AllStudents.js'

const AddStudentForm = () => {

    const dispatch = useDispatch()

    let students = useSelector(selectStudents)
    const campuses = useSelector(selectCampuses)

    const [list, setList] = React.useState([])
    const [form, setForm] = React.useState({
        id: "",
        firstName: "",
        lastName: "",
        email: '',
        imgUrl: '',
        gpa: '',
        campusId: ''
    });

    React.useEffect(() => {
        if (list.length < students.length) {
            setList(students);
        }
    });

    React.useEffect(() => {
        setList(students)
    }, [form]);

    const handleChange = prop => event => {
        setForm({
            ...form,
            [prop]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(await addStudentAsync(form))
        setForm({
            id: "",
            firstName: "",
            lastName: "",
            email: '',
            imgUrl: '',
            gpa: '',
            campusId: ''
        })
    }

    let renderedStudents = list.map((itm, idx) =>
        <div key={idx}>
            <Student data={itm} />
        </div>
    )

    let dropdown = campuses.map((campus) =>
        <option value={campus.id} key={`Campus${campus.id}`}>{campus.name}</option>
    )

    return (
        <div id='allStudents'>
            <div className='allStudents'>
                {renderedStudents}
            </div>
            <h1>ADD A NEW STUDENT</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={form.firstName} onChange={handleChange("firstName")} placeholder={'First Name'} /><br />
                <input type='text' value={form.lastName} onChange={handleChange("lastName")} placeholder={'Last Name'} /><br />
                <input type='email' value={form.email} onChange={handleChange("email")} placeholder={'Email'} /><br />
                <input type='text' value={form.imgUrl} onChange={handleChange("imgUrl")} placeholder={'Image URL'} /><br />
                <input type='number' step='0.01' min='0' max='4' value={form.gpa} onChange={handleChange("gpa")} placeholder={'GPA'} /><br />
                <select value={form.campusId} onChange={handleChange("campusId")}>
                    <option key={'CampusDefault'}>Select a campus</option>
                    {dropdown}
                </select><br />
                <input type='submit' value={'Submit'} />
            </form>
        </div>
    )
}
export default AddStudentForm;