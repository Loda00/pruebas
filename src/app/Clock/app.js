import React from 'react'

class Clock extends React.Component {

    constructor(){
        super()
        this.timeID = ''
        this.state = {
            date : new Date()
        }
    }

    componentWillMount(){
        this.timeID = setInterval(() => {
            this.pick()
            console.log('this.timeID',this.timeID)
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timeID)
    }

    pick () {
        this.setState({
            date: new Date()
        })
    }

    render(){
        return(
            <React.Fragment>
                <h3>Hora actual</h3>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </React.Fragment>
        )
    }
}

export default Clock