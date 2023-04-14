import React, {useCallback} from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
import { deleteStudentAsync, editStudentAsync } from '../../features/studentsSlice'

function Student(props){

    const dispatch = useDispatch();
    const navigate = useNavigate()

    let id = props.data.id
    
    const handleOnClick = useCallback(() => navigate(`/students/${id}`, {replace: true}), [navigate]);
    
    const handleDelete = async (event)=>{
        event.preventDefault();
        await dispatch(deleteStudentAsync(id));
        window.location.reload();
    }

    const handleRegister = async () => {
        const student = {
            id: props.data.id,
            firstName: props.data.firstName,
            lastName: props.data.lastName,
            email: props.data.email,
            imgUrl: props.data.imgUrl,
            gpa: props.data.gpa,
            campusId: null, // or undefined
        };
        await dispatch(editStudentAsync(student));
    };


  return (
    <div className="student">
      <button className="delete-btn" onClick={handleDelete}>
        X
      </button>
      <img src={props.data.imgUrl} alt="Student" />
      <button className="name-btn" onClick={handleOnClick}>
        {props.data.firstName} {props.data.lastName}
      </button>
      <button className="unregister-btn" onClick={handleRegister}>
        Unregister {props.data.firstName}
      </button>
    </div>
  );
}

export default Student;