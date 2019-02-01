import React from 'react'
import Button from '../button/app'
import Label from './label'
import Calculador from './calculador'

const api = 'https://demo1443058.mockable.io/codeproject_tutorial/api/contacts'

class Toogle extends React.Component {

    constructor() {
        super()
        this.state = {
            isToogle: true,
            names: ['Juan', 'Renzo', 'Punkito', 'Raúl', 'Panchito'],
            text : '',
            temperatura: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick() {
        // console.log('click')
        this.setState(state => ({
            isToogle: !state.isToogle
        }))
    }
    
    handleChange (e) {
        const { name, value } = e.target

        this.setState({
            [name]: value
        },
        // () => {
        //     console.log("ASYNC", this.state.text)
        //     }
        )
        // console.log('text', this.state.text)
    }

    handleSubmit = () => {
        console.log('se guardó', this.state.text)
    }

    render() {
        return (
            <React.Fragment>
                <Button click={this.handleClick} name={this.state.isToogle ? 'ON' : 'OF'} />
                <Label warn={this.state.isToogle} />
                <ul>
                    {
                        this.state.names.map((name,key) => (<li key={key}>{name}</li>))
                    }
                </ul>
                <input type="text" name="text" value={this.state.text} onChange={this.handleChange} />
                <Button name="Submit" click={this.handleSubmit} />
                <div>
                    <input type="text" name="temperatura" value={this.state.temperatura} onChange={this.handleChange} />
                    <Calculador cell={Number(this.state.temperatura)} ></Calculador>
                </div>
            </React.Fragment>
        )
    }
}

 let xxx = () => {

    const numbers = [1,2,3,4,5]
    
    function asd () {
        const listNumbers =  numbers.map(number =>
            <li key={number}>{number}</li>
        )
        return listNumbers
    }

    return (
        <div>
            {asd()}
        </div>
    )
}


export default Toogle