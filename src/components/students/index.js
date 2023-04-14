import React from "react";
import Student from "./Student";
import {useSelector} from "react-redux";
import Form from "./Student_Form";

function Students(){
    
    return(
            <div className="addStudent"><Form/></div>
    )
}

export default Students