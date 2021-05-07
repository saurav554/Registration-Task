import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Profile extends React.Component
{
    
    render() {
     console.log(this.props)
        return (
            <div> 
                <h1>{this.props.user.username}</h1>
                <h1>{this.props.user.lastname}</h1>

                <h1>{this.props.user.email}</h1>

                <h1>{this.props.user.password}</h1>

                <h1>{this.props.user.phone}</h1>
                <h1>{this.props.user.address}</h1>

            </div> 
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        user:state.user
        // firstname:state.firstname,
        // lastname:state.lastname,
        // email:state.email,
        // password:state.password,
        // phone:state.phone,
        // address:state.address
    }
}

export default connect(mapStateToProps)(Profile)