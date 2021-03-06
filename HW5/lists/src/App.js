import React, { Component } from 'react';
import Lists from './Lists.js';
import AddList from './AddList.js';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
	lists: [], // this holds the name of each list
	items: {} // this property names of this object are the names of the lists; their values are arrays of the items in each list
    };
  }

  /**
   * This function takes the state of an AddList component as its parameter
   * and updates the state of this App component by adding a new entry to the "lists"
   * array and then adding a new property in the "items" object that has the same name
   * as the value put into the "lists" array. It should then re-render this App component.
   */
  handleAddList(s) {
      // Implement this function!
      let thisLists = this.state.lists;
      thisLists.push(s);

      //Use callback to set the items when list name is added
      this.setState({lists:thisLists}, ()=>{
        var newItems = this.state.items;
        newItems[s] = [];
        this.setState({items:newItems});
      });
  }

  /**
   * This function takes the state of an AddItem component as its parameter
   * and updates the state of this App component by adding a new value to the 
   * appropriate array in the "items" property of the state. Keep in mind that
   * the property names of "items" are the names of each list, which is mapped
   * to an array of the items in that list. After updating the "items" part of 
   * the state, this function  should then re-render this App component.
   */
  handleAddItem(itemName, listName) {
      // Implement this function!

      //Get states items object
      var newItems = this.state.items;

      //Get particular item list array
      var thisItemsList = newItems[listName];
      
      var newItem = {name : itemName};

      //Add new item to the array
      thisItemsList.push(newItem);
      //Assign new array to list item object
      newItems[listName] = thisItemsList;

      //Update the state with new items object
      this.setState({items:newItems});      
  }

  /**
   * Renders the component.
   */
  render() {
    return (
      <div className="App">
        <AddList addList={this.handleAddList.bind(this)} />
        <div id="listsDiv" className="List">
          <Lists lists={this.state.lists} items={this.state.items} addItem={this.handleAddItem.bind(this)} />
        </div>
      </div>
    );
  }

}

export default App;
