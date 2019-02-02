import React from 'react'
import './style.sass'

let Button = (props) => {
    const { click, name } = props
    
    return (
        // <button className="btn_principal" onClick={click}></button>
        <input className="btn_principal" type="submit" onClick={click} name={name}  />
    )
}

export default Button