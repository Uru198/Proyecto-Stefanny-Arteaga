import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";

const Inicio = () => {

    const history = useHistory();


    const cerrarSesion = () => {
        axios.get('http://localhost:8000/api/logout', {withCredentials:true})
            .then(res => history.push('/login'))
            .catch(err => console.log(err));
    }


    return (
        <div>
           
        </div>
    )
}

export default Inicio;
