import React, { Component } from 'react';

class DogItem extends Component{
    onDelete(name){
        this.props.onDelete(name);
        console.log("DogItem:",name);
    }

    render(){
        var thisDog = this.props.dog;

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
                <a href="#" onClick={this.onDelete.bind(this, this.props.dog.name)}>X</a>

            </ul>

        );
    }
}

export default DogItem