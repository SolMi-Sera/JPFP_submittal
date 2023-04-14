import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Student from "../students/Student";
import { selectCampuses } from "../../features/campusesSlice";
import { selectStudents } from "../../features/studentsSlice";
import { fetchSingleCampus, selectSingleCampus } from "../../features/singleCampusSlice";
import { editCampusAsync } from "../../features/campusesSlice";

function CampusPage() {
    const dispatch = useDispatch();


    const { id } = useParams();

    const [form, setForm] = React.useState({
        id: id,
        name: "",
        imgUrl: '',
        address: "",
        description: '',
    });

    const handleChange = prop => event => {
        setForm({
            ...form,
            [prop]: event.target.value
        })
    }

    const campusId = Number(id)
    const campuses = useSelector(selectCampuses)
    const students = useSelector(selectStudents)

    let singleCampus = useSelector(selectSingleCampus)
    const { name, description, address, imgUrl } = singleCampus.info

    useEffect(() => {
        dispatch(fetchSingleCampus(campusId));
    }, [form]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await dispatch(editCampusAsync(form))
        singleCampus = form;
        setForm({
            id: id,
            name: "",
            imgUrl: '',
            address: "",
            description: '',
        })
    }

    const attendingStudents = [];

    students.map(student => {
        if (student.campusId == campusId) {
            attendingStudents.push(student)
        }
    })


    return (
        <div className="singleCampus">
            <div className="campusImageContainer">
                <img src={imgUrl} alt="" className="campusImage" />
            </div>
            <div className="campusDetails">
                <h1>{name}</h1>
                <div className="addressSection">
                    <h2>Address</h2>
                    <p>{address}</p>
                </div>
                <div className="descriptionSection">
                    <h2>Description</h2>
                    <p>{description}</p>
                </div>
                <div className="enrolledStudentsSection">
                    <h2>Enrolled Students</h2>
                    <div className="attendingStudents">
                        {attendingStudents.map((student) => (
                            <Student key={student.id} data={student} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="editCampusSection">
                <h2>Update Campus</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Campus Name:
                        <input
                            type="text"
                            value={form.name}
                            onChange={handleChange("name")}
                            className="inputField"
                        />
                    </label>
                    <label>
                        Image URL:
                        <input
                            type="text"
                            value={form.imgUrl}
                            onChange={handleChange("imgUrl")}
                            className="inputField"
                        />
                    </label>
                    <label>
                        Address:
                        <input
                            type="text"
                            value={form.address}
                            onChange={handleChange("address")}
                            className="inputField"
                        />
                    </label>
                    <label>
                        Description:
                        <input
                            type="text"
                            value={form.description}
                            onChange={handleChange("description")}
                            className="inputField"
                        />
                    </label>
                    <input type="submit" value="Submit" className="submitButton" />
                </form>
            </div>
        </div>
    );
}
export default CampusPage;