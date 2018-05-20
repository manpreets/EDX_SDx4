import React, { Component } from 'react';

class AddList extends Component {


  handleSubmit(e) {
<<<<<<< HEAD
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!

      // Implement the rest of this function here!
=======
      // Implement the rest of this function here!
      if(this.refs.id.value === ''){
        alert('List name is required');
      }
      else{
        this.props.addList(this.refs.id.value);
      }
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
>>>>>>> bd108c706ae858ecd3d26d03ad72d30516f35e7f
  }

  render() {
    return (
      <div id="addListDiv">
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div id='addList'>
      <label>What will be on your next list?&nbsp;
      <input type='text' ref='id' id='newID'></input>
      </label>
      </div><br />
      <input type='submit' value='Create List' />
      </form>
      </div>
    );
  }
}

export default AddList;
