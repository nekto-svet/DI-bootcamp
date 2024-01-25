// In a new Javascript file, create an ErrorBoundary Class Component:
// Create a state with a property named hasError, set by default to false.
// Use a componentDidCatch() method to set the value of the hasError property.

import React from 'react'; 
class ErrorBoundary extends React.Component {
    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch =(error, errorInfo)=>{
        this.setState({hasError: true});
    }

    render () {
        if (this.state.hasError){
            return <h1>An error has occured</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;