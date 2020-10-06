import React, { Component } from 'react'

export class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }

     static   getDerivedStateFromError()
        {
            return{
                hasError:true
            }
            
        }
    

    render() {
        if(this.state.hasError)
        {
            return <div style={{fontWeight:'bold'}}>Something went wrong</div>
        }
    return this.props.children;
    }
}

export default ErrorBoundry
