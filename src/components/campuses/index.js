import React from "react";
import Campus from "./Campus"
import {useSelector} from "react-redux";
import Form from "./AllCampuses";

function campuses(){

    return(
        <div className="allCampuses"><Form/></div>
    )
}

export default campuses