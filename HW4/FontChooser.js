class FontChooser extends React.Component {

	constructor(props) {
		super(props);
		var iniSize = Number(this.props.size);
		//Check if minimun is zero or negative
		var minimumVal = Number((this.props.min <= 0)?1:this.props.min);
		var maximumVal = Number(this.props.max);
		//Check if minimum is greater than max
		if(minimumVal > maximumVal){
			maximumVal = minimumVal;
			minimumVal = this.props.max;
		}
		//initial size is greater than max
		if(iniSize > maximumVal){
			iniSize = maximumVal;
			console.log('iniSize > maximumVal'+ iniSize);
		}
		else if(iniSize < minimumVal){//initial size is less than min
			console.log('iniSize : '+ iniSize + ' | min val : ' + minimumVal);
			
			iniSize = minimumVal;
		}
		//Set initial state
		this.state =({size:iniSize,
					sizeDupe:iniSize,
					hideControls: true,
					isBold:this.props.bold==="true",
					max:maximumVal,
					min:minimumVal,
					fColor:'black'
					});
	
	}


	//Reset
	resetSize()
	{
		this.setState({size:this.state.sizeDupe, fColor:'black'});
	}
	
	//Toggle hide all
	toggleHide(){
		this.setState({hideControls:!this.state.hideControls});
	}

	//Decrease size
	decreaseSize(){
		let newSize = Number(this.state.size);

		if(newSize > this.state.min) 
		{
			newSize -= 1;
			this.setState({size:newSize, fColor:(newSize <= this.state.min)?'red':'black'});
		}
	}

	//Increase size
	increaseSize(){
		let newSize = Number(this.state.size);

		if(newSize < this.state.max) 
		{
			newSize += 1;
			this.setState({size:newSize, fColor:(newSize >= this.state.max)?'red':'black'});
		}
	}	
	
	checkChange()
	{
		this.setState({isBold:!this.state.isBold});
	}

    render() {
		var fWeight = this.state.isBold?'bold':'normal';
		var fSize = Number(this.state.size);

		return(
			<div style={{position:'absolute',left:100,top:100}}>
			<input type="checkbox" id="boldCheckbox" onChange={this.checkChange.bind(this)} checked={this.state.isBold} hidden={this.state.hideControls}/> 
			<button id="decreaseButton" onClick={this.decreaseSize.bind(this)} hidden={this.state.hideControls}>-</button> 
			<span id="fontSizeSpan" onDoubleClick={this.resetSize.bind(this)}  style={{color:this.state.fColor}} hidden={this.state.hideControls}>{this.state.size}</span> 
			<button id="increaseButton" onClick={this.increaseSize.bind(this)} hidden={this.state.hideControls}>+</button> 
			<span style={{fontWeight:fWeight, fontSize:fSize, color:this.state.fColor}} id="textSpan" onClick={this.toggleHide.bind(this)} >{this.props.text}</span>
			</div>
		);
    }
}

FontChooser.defaultProps={
	min:6,
	max:30,
	size:12,
	bold:false,
	text:'Values not specified'
}