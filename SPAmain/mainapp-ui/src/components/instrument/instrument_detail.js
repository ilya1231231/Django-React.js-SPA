import React, {useEffect, useState } from 'react';
import axios from 'axios'



function InstrumentDetail({ match }){
    const [instrument, setInstrument] = useState({})
    const id = match.params.id

    useEffect(() =>{
        axios({
            method: "GET",
            url: `http://127.0.0.1:8000/api/instrument/${id}`
        }).then(response => {
            setInstrument(response.data)
        })
    }, [id])

    return (
        <div>
            <h3>Инструмент {instrument.name}</h3>
            <h1>Длина {instrument.length}</h1>
        </div>
    )
}

export default InstrumentDetail