import React from 'react'
import Button from '../button/app'

class Toogle extends React.Component {

    constructor(){
        super()
        this.state = {
            isToogle: true
        }
        this.handleClick = this.handleClick.bind(this)
    }
        
    handleClick () {
        console.log('click')
        this.setState(state => ({
                isToogle: !state.isToogle
        }))
    }

    render(){
        return(
            <React.Fragment>
                <Button click={this.handleClick} name={this.state.isToogle ? 'ON' : 'OF'} />
            </React.Fragment>
        )
    }
}

export default Toogle