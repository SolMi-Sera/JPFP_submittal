import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Students from "./components/students";
import Campuses from "./components/campuses";
import Navigation from "./components/navigation";
import StudentPage from "./components/students/StudentPage";
import CampusPage from "./components/campuses/CampusPage";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudentsAsync } from './features/studentsSlice';
import { fetchCampusesAsync } from './features/campusesSlice';

import StudentsList from "./components/students";



function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCampusesAsync());
        dispatch(fetchStudentsAsync());
    }, [dispatch]);

    return (
        <div className="App">

            <h1>ACME Campus & Student Resource Directory</h1>
            <Navigation />
            <h2> Your complete school & student informaton outlet.</h2>
            {/* <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
                aliquam, quisquam incidunt, dolorum beatae voluptatibus maiores
                quibusdam a cumque quis, vero consequatur? Officia nobis atque harum
                exercitationem impedit debitis similique.
            </p> */}

            <Routes>
                <Route path={"campuses"} element={<Campuses />} />
                <Route path={"students"} element={<Students />} />
                {/* <Route path={"students"} element={<AllStudents />} /> */}
                {/* <Route path={"students"} element={<StudentsList />} /> */}
                <Route path={"campuses/:id"} element={<CampusPage />} />
                <Route path={"students/:id"} element={<StudentPage />} />
            </Routes>

        </div>


    )
}

export default App;