import React, { Component } from 'react';
import AddDog from './add-dog'
import DogsList from './dogs-list'

class DogsApp extends Component{
    constructor(props){
        super(props);
        this.state = {dogsList:[]};
    }
    getDogs() {
        var defaultDogs = {dogs: [
          {
            name: 'Princess',
            breed: 'Corgi',
            image: 'https://s-media-cache-ak0.pinimg.com/originals/51/ae/30/51ae30b78696b33a64661fa3ac205b3b.jpg'
          },
          {
            name: 'Riley',
            breed: 'Husky',
            image: 'http://portland.ohsohandy.com/images/uploads/93796/m/nice-and-sweet-siberian-husky-puppies-for-free-adoption.jpg'
          },
        ]};
        this.setState({dogsList:defaultDogs});
      }

      componentWillMount(){
          this.getDogs();
      }

      render(){
          return(
            <div>
                <p>Dogs are here </p>
            </div>
          );
        }
    
}

export default DogsApp