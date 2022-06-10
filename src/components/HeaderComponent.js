import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="#" className="navbar-brand" style={{marginLeft:"29rem"}}>React - Employee Management App </a>
                    </div>                 
                    </nav>
                    <div> 
                   <img alt="emp image" src="./images/emp.png"
                   style={{ marginTop:"0rem",marginLeft:"9rem",height: "12rem", paddingLeft: "50rem" }} 
                   /> 
                </div>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
