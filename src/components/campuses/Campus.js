import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { deleteCampusAsync } from '../../features/campusesSlice'

function Campus(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    let id = props.data.id
    const handleOnClick = useCallback(() => navigate(`/campuses/${id}`, { replace: true }), [navigate]);
    const handleDelete = async (event) => {
        event.preventDefault();
        await dispatch(deleteCampusAsync(id));
        window.location.reload();
    }

    return (
        <div className='campus'>
            <img src={props.data.imgUrl}></img>
            <button className="name-btn"
                onClick={handleOnClick}>{props.data.name}
            </button>

            <button className="delete-btn"
                onClick={handleDelete}>
                X
            </button>
        </div>
    )
}

export default Campus;