import React, { Component } from 'react';

class DogItem extends Component{
    render(){
        var thisDog = this.props.itemDog;

        if(!thisDog) {
            return(
                <div> No dog found!</div>
            );
        }

        return(
            <ul className="dog">DogList here...<br/>
                <img src={thisDog.image} width="100" heigh="100" />
                <br />
                <br />
                <span>Name: {thisDog.name} </span>
                <br/> 
                <span>Breed: {thisDog.breed}</span>
                <a href="#" onClick={thisDog.onDelete.bind(this, thisDog.name)}>X</a>

            </ul>

        );
    }
}

export default DogItem