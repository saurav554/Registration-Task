import React from 'react'

import {connect} from 'react-redux'

import {startAddUser} from '../../actions/user'


class Registration extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            phone:'',
            address:''
        }
    }

    handleClick = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const registerData = {
            username: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone,
            address: this.state.address 
        }
        console.log(registerData)

        const redirect = () => this.props.history.push('/users/login')
        this.props.dispatch(startAddUser(registerData,redirect))
        

    }

    render(){
        return (
            <div className="justify-content-md-center">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    
                    <h1 className="h1 mb-3 font-weight-normal text-center">Register</h1>

                    <label htmlFor="firstname" className="sr-only">Firstname</label>
                    <input type="text" id="username" className="form-control mb-3" placeholder="Firstname" name="firstname" onChange={this.handleClick}/>
                    
                    <label htmlFor="lastname" className="sr-only">Lastname</label>
                    <input type="text" id="lastname" className="form-control mb-3" placeholder="Lastname" name="lastname" onChange={this.handleClick}/>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="text" id="email" className="form-control mb-3" placeholder="Email"  name="email" onChange={this.handleClick}/>

                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" id="password" className="form-control mb-3" placeholder="Password"  name="password" onChange={this.handleClick}/>
                   
                    <label htmlFor="phone" className="sr-only">phone</label>
                    <input type="number" id="phone" className="form-control mb-3" placeholder="Phone-no"  name="phone" onChange={this.handleClick}/>

                    <label htmlFor="address" className="sr-only">address</label>
                    <input type="text" id="address" className="form-control mb-3" placeholder="Address"  name="address" onChange={this.handleClick}/>

                   
                   
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default  connect()(Registration)