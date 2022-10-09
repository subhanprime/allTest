
import React, { Component } from "react";
class ErrorBoundries extends Component {
    state = {
        error: null
    }

    static getDerivedStateFromError(error) {
        return { error }
    }
    componentDidCatch(error, info) {
        console.log('catch11', error.message);
    }
    render() {
        const { error } = this.state;
        if (error) {
            return (
                <this.props.ErrorComponents error={error} />
            )
        }

        return this.props.children
    }
}
export default ErrorBoundries;