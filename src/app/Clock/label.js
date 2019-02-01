import React from 'react'

let Label  = (props) => {
    const {warn} = props

    if(!warn) {
        return null
    }

    return (
        <p>Aparecí xd</p>
    )
}

export default Label