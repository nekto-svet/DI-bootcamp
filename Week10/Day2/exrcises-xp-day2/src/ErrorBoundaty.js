import React from 'react';


// In another Javascript file, create the ErrorBoundary class component, it will hold an error property in the state. The error value is set to null.
// Use the componentDidCatch lifecycle to set the value of the error property.
// Render an error message with some details. (We will use this component to wrap the BuggyCounter component in our below simulations)

class ErrorBoundary extends React.Component {
    constructor(){
        super();
        this.state = ({error:null});
    } 

    componentDidCatch = (error, errorInfo) => {
        this.setState({error, errorInfo});
    }
    render(){
        if (this.state.error != null){
            return<>
            <div>Something went wrong.</div>
            <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
            </details>
            </>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;