import React from 'react'
import {Input} from 'react-materialize'

let Time = () => {
    return(
        <Input defaultValue={new Date().toLocaleTimeString()} s={1} label="Hora"/>
    )
}



export default Time