import React from "react";
import { Link } from "react-router-dom";

function userStatusFunction(userStatus) {
    if (userStatus === 'admin') {
        return <Link to="/admin-dashboard">Admin</Link>;
    } else if (userStatus === 'staff') {
        return <Link to="/staff/Staff-dashboard">Obsluga</Link>;
    } else {
        return <Link to="/dashboard">Dashboard</Link>;
    }
}



export default userStatusFunction;