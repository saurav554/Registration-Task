import React from 'react'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import Home from './components/Home/index'
import Registration from './components/user/Registration'
import Login from './components/user/Login'
import Profiles from './components/profile/Profiles'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,NavbarBrand,Nav,NavItem} from 'reactstrap'
import swal from 'sweetalert'

import {connect} from 'react-redux'
import {startRemoveUser} from './actions/user'


function App(props) {
  return (
    <BrowserRouter>
    <div>
    <Navbar color="light" light expand="md" className="mb-5">
      <NavbarBrand>Registration-Page</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <Link className="nav-link text-primary" to="/">Home</Link>
        </NavItem>
        {Object.keys(props.user).length !== 0 &&
        <React.Fragment>
         <NavItem>
          <Link className="nav-link text-primary" to="/profile">Profile</Link>
        </NavItem> 
     
        </React.Fragment>
        }
        {Object.keys(props.user).length == 0 ? (
            <React.Fragment>
            <NavItem>
              <Link className="nav-link text-primary" to="/users/login">Login</Link>
            </NavItem>
          <NavItem>
            <Link className="nav-link text-primary" to="/users/registration">Register</Link>
          </NavItem>
          </React.Fragment>
        ):(
          <NavItem>
          <Link className="nav-link text-primary" to="/" onClick={()=>{
            swal({
              title: "Are you sure you want to log out?",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then((willDelete) => {
              if (willDelete) {
                swal("Successfully Logged out", {
                  icon: "success",
                });
                
                props.dispatch(startRemoveUser())
              } 
            })
            }}>Logout</Link>
          </NavItem>
        )}
        
      </Nav>
    </Navbar>
    
    <div className='container'>

    <Switch>

       <Route path="/" component={Home} exact={true}/>
       <Route path="/profile" component={Profiles} exact={true}/>

       <Route path="/users/login" component={Login} exact={true} />
      <Route path="/users/registration" component={Registration} exact={true}/>

  
      
    </Switch>
    </div>
    </div>
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    customers:state.customers
  }
}

export default connect(mapStateToProps)(App)
