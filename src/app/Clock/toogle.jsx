import React from 'react'
// import Button from '../button/app'
import Label from './label'
import Calculador from './calculador'
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Paper } from '@material-ui/core'
import Draggable from 'react-draggable';
const api = 'https://demo1443058.mockable.io/codeproject_tutorial/api/contacts'

function PaperComponent(props) {
    return (
      <Draggable>
        <Paper {...props} />
      </Draggable>
    );
  }

class Toogle extends React.Component {

    constructor() {
        super()
        this.state = {
            isToogle: true,
            names: ['Juan', 'Renzo', 'Punkito', 'Raúl', 'Panchito'],
            text: '',
            temperatura: '',
            test: '',
            isOpenModal: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.clean = this.clean.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    handleClick() {
        // console.log('click')
        this.setState(state => ({
            isToogle: !state.isToogle
        }))
    }

    handleChange(e) {
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

    componentWillMount() {

        this.setState({ test: 'Hi' })
    }

    clean() {
        console.log('limpio');
        this.setState({ test: '', isOpenModal: true })
    }

    closeModal () {
        this.setState({ test: '', isOpenModal: false })
    }


    render() {
        return (
            <div>
                <TextField value={this.state.test} label="Test"></TextField>
                <Button onClick={this.clean} variant="contained" color="primary">XXX</Button>
                <Dialog
                    open={this.state.isOpenModal}
                    onClose={this.closeModal}
                    PaperComponent={PaperComponent}
                    aria-labelledby="suscribirse"
                >
                    <DialogTitle id="suscribirse">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send
                            updates occasionally.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.closeModal} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.closeModal} color="primary">
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
                {/* <Button click={this.handleClick} name={this.state.isToogle ? 'ON' : 'OF'} />
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
                </div> */}
            </div>
        )
    }
}

let xxx = () => {

    const numbers = [1, 2, 3, 4, 5]

    function asd() {
        const listNumbers = numbers.map(number =>
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