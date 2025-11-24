import axios from 'axios'
import React, { useState } from 'react'

function Axios() {
    const [res, setres] = useState([])

    const mydata = async () => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users limit=5')
        setres(result.data)
        console.log(result.config);
        
    };

    return (
        <div>
            <button onClick={mydata}> click </button>

            {res.map((d, index) => (
                <h3 key={index}>{index+1} - {d.name}-{d.username}{d.email}</h3>
            ))}
        </div>
    )
}

export default Axios
