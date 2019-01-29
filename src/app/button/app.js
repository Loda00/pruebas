import React from 'react'
import './style.sass'

let Button = (props) => {
    const { click, name } = props
    console.log(name)
    return (
        <button className="btn_principal" onClick={click}>{name}</button>
    )
}

export default Button