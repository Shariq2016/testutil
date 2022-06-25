import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
export default function Navbar(props)
{
    return(
        <>
       
       <nav  className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} mx-3`}>
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/about">About <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Link</a>
      </li>
     
      
    </ul>
    
    <div className={` form-switch text-${props.mode==='light'?'dark':'light'} mx-4`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggle1} role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
</div>
<div className={` form-switch text-${props.mode==='light'?'dark':'light'} mx-4`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">GreenMode</label>
</div>
  </div>
</nav>
      </>
    )
}
Navbar.propTypes=
{
   title: PropTypes.number.isRequired,
   About:PropTypes.string

}
Navbar.defaultProps=
{
    title:123,
    About:'hey scroll down'

}