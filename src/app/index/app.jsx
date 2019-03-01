import React, { Component } from 'react'
import { TextField, Button, Dialog,  DialogTitle, DialogContent, DialogActions, DialogContentText,
Table, TableHead, TableRow, TableCell, TableBody, } from '@material-ui/core'
import {ToastContainer, ToastStore} from 'react-toasts'
import Boton from '../Button/app'
import axios from 'axios'
// import 'react-notifications/lib/notifications.css'
import './style.sass'
import '../../public/favicon.ico'
import { setInterval } from 'timers';

class App extends Component {

    constructor() {
        super()
        this.time = ''
        this.state = {
            personas: [],
            name: '',
            age: '',
            country: '',
            isOpenModal: false,
            date: new Date()
        }
        axios.defaults.baseURL = 'http://localhost:7070'
        // axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        this.addUser = this.addUser.bind(this)
        this.catchInput = this.catchInput.bind(this)
    }

    getData() {
        axios.get('/data')
            .then(rs => {
                const data = rs.data
                this.setState({ personas: data })
                console.log(data)
            })
            .catch(e => console.log(e))
        console.log('api extraida !')
    }

    componentWillMount() {
        this.getData()
    }

    addUser(e) {

        const { name, country, age } = this.state

        if (name.length == 0) {
            ToastStore.warning('Ingrese su nombre')
            e.preventDefault()
            return
        }

        if (country.length == 0) {
            ToastStore.warning('Ingrese el País')
            e.preventDefault()
            return
        }

        if (age.length == 0) {
            ToastStore.warning('Ingrese el Edad')
            e.preventDefault()
            return
        }

        e.preventDefault()
        this.postData()
    }

    postData = (id) => {
        console.log('obj', id);

        const { name, age, country } = this.state
        const data = { name, age: Number(age), country }

        if (id === undefined){
            const id = (Math.random() * 1000).toString().split('.')[1];
            data.id = id
            axios.post('/data', data)
                .then(() => {
                    this.cleanForm()
                    this.getData()
                    ToastStore.success(`Agregado ususario ${name} !`)
                })
                .catch(e => console.log(e))
        } else {
            axios.put(`/data/${id}`, data)
            .then(() => {
                this.cleanForm()
                this.getData()
                this.handleCloseModal()
                ToastStore.success(`Actualizado usuario ${name} !`)
            })
            .catch(e => console.log(e))
        }
        
    }

    editUser = (user) => {
        
        const { id, name, age, country} = user
        
        this.setState({
            ...user
        })

        console.log('editando', this.state)

        console.log('user', {...user})
    }

    deleteUser = (obj) => {
        console.log(obj)
        axios.delete(`/data/${obj.id}`)
        .then(() => {
            this.getData()
            ToastStore.error(`Eliminado usuario ${obj.name} !`)
        })
        .catch(e => console.log(e))
    }

    cleanForm () {
        this.setState({
            name: '',
            age: '',
            country: ''
        })
    }

    handleCloseModal = () => {
        this.setState({
            isOpenModal: false,
            name: '',
            country: '',
            age: ''
        })
    }

    handleOpenModal = (persona) => {
        const {name, country, age} = persona
        this.setState({
            isOpenModal: true,
            name,
            country,
            age
        })
    }


    catchInput = (e) => {
        const { name, value } = e.target
        const { country, age } = this.state
        console.log('this.state', this.state.name, country, age)
        this.setState({
            [name]: value
        })
    }

    getCurrentDate = () => {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount () {
        this.time = setInterval(()=> {
            this.getCurrentDate()
        }, 1000)
    }

    componentWillUnmount () {
        clearInterval(this.time)
    }

    componentWillReceiveProps

    render() {
        
        return (
            
            <React.Fragment>
                <div>
                    <h4>Hora : </h4>
                    <p>{this.state.date.toLocaleTimeString()}</p>
                </div>
                <div className="formulario">
                    <form onSubmit={this.addUser}>
                        <div>
                            <TextField value={this.state.name} autoComplete="off" name="name" onChange={this.catchInput} label="Nombres y Apellidos" />
                            <TextField value={this.state.country} autoComplete="off" name="country" onChange={this.catchInput} label="País"/>
                            <TextField value={this.state.age} autoComplete="off" name="age" onChange={this.catchInput} label="Edad" />
                        </div>
                        <Boton name="AGREGAR"></Boton>
                    </form>
                </div>
                <div className="tabla">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombres</TableCell>
                                <TableCell>Edad</TableCell>
                                <TableCell>País</TableCell>
                                <TableCell>Editar</TableCell>
                                <TableCell>Eliminar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.personas.map((persona, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>{persona.name}</TableCell>
                                            <TableCell>{persona.age}</TableCell>
                                            <TableCell>{persona.country}</TableCell>
                                            <TableCell>
                                            <Button onClick={() => this.handleOpenModal(persona)}>Editar</Button>
                                            <Dialog
                                                open={this.state.isOpenModal}
                                                onClose={this.handleCloseModal}
                                                aria-labelledby="editar"
                                                maxWidth="xs"
                                            >
                                                <DialogTitle id="editar">Subscribe</DialogTitle>
                                                <DialogContent>
                                                    <DialogContentText>
                                                        Probando esta wea
                                                    </DialogContentText>
                                                        <TextField value={this.state.name} fullWidth autoComplete="off" name="name" onChange={this.catchInput} label="Nombres y Apellidos" />
                                                        <TextField value={this.state.country} fullWidth autoComplete="off" name="country" onChange={this.catchInput} label="País"/>
                                                        <TextField value={this.state.age} fullWidth autoComplete="off" name="age" onChange={this.catchInput} label="Edad" />
                                                </DialogContent>
                                                <DialogActions>
                                                    <Button onClick={() => this.postData(persona.id)} variant="contained" color="primary">
                                                        Save
                                                    </Button>
                                                    <Button onClick={this.handleCloseModal} variant="contained" color="primary">
                                                        Exit
                                                    </Button>
                                                </DialogActions>
                                            </Dialog>
                                                </TableCell> 
                                            <td><Button onClick={() => this.deleteUser(persona)}>Eliminar</Button></td>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </div>
                <ToastContainer className="toast" position={ToastContainer.POSITION.BOTTOM_LEFT} store={ToastStore}/>
            </React.Fragment>
        )
    }

}

export default App