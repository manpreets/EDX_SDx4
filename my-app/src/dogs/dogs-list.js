import React, { Component } from 'react';
import DogItem from './dog-item'
class DogsList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                this.props.dogs.map(function(item){
                    <DogItem itemDog={item} />
                });
            </div>
        );
    }
}

export default DogsList