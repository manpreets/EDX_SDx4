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

      handleAddDog(newDog){
        let dogs = this.state.dogsList;
        dogs.push(newDog);
        this.setState({dogsList:dogs});
      }

      handleDeleteDog(dogName){
        let dogs = this.state.dogsList;
        let index = dogs.findIndex(x => x.name === dogName);
        dogs.splice(index, 1);
        this.setState({dogsList:dogs});
      }

      render(){
          return(
            <div className="app">
                <DogsList onDeleteDog={this.handleDeleteDog.bind(this)}  dogs={this.state.dogsList} />
                <AddDog onAddDog={this.handleAddDog.bind(this)} />
            </div>
          );
        }
    
}

export default DogsApp