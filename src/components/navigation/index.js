import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navigation() {

    const navigate = useNavigate();
    const handleOnClickHome = useCallback(() => navigate('/', { replace: true }), [navigate]);
    const handleOnClickCampus = useCallback(() => navigate('/campuses', { replace: true }), [navigate]);
    const handleOnClickStudent = useCallback(() => navigate('/students', { replace: true }), [navigate]);

    return (
        <nav>
            <button onClick={handleOnClickHome}>Home</button>
            <button onClick={handleOnClickStudent}>Students</button>
            <button onClick={handleOnClickCampus}>Campuses</button>

        </nav>
    )
}

export default Navigation