import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
      super(props);
      this.state = { color: 'black', clicked:false };
    }

    handleClick() {
    // Implement this function!
       this.setState({clicked:!this.state.clicked}, ()=>{
         this.setState({color:this.state.clicked?'gray':'black'})
       });
    }

  render() {
    var item = this.props.item;
    var name = item.name;

    return (
	    <span onClick={this.handleClick.bind(this)} style={{color: this.state.color}}>
        <strong>{name}</strong>
      </span>
    );

  }

}
export default ListItem;

