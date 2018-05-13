import React, { Component } from 'react'
import './App.css'

class Counter extends Component
{
    constructor(props)
    {
        super(props);

        this.state = { count: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return
        (
            <div>
                <span>{this.state.count}</span>
                <button onClick={this.handleClick} text='Click me' />
            </div>
        );
    }
    
}