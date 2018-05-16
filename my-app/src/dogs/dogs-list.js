import React, { Component } from 'react';
import DogItem from './dog-item'
class Dogs extends Component{

    deleteDog(){
        this.props.onDelete(this);
    }

    render(){
        let dogItems;
        if(this.props.dogs){
            dogItems = this.props.dogs.map(dog => {
                return (
                  <DogItem onDelete={this.deleteDog.bind(this)} key={dog.name} dog={dog} />
                );
              });
        
            return(
                <div className="Dogs">
                    <h1>Good Dogs</h1>
                    {dogItems}
                </div>
            );
        }
        else{
            return(
                <p>No dogs found in the list</p>
            );            
        }
    }
}

export default Dogs