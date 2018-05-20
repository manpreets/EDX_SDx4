import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DogsApp from './dogs/dogs-app'
import {expect} from 'chai';
import {mount, shallow, configure} from 'enzyme'; 
import Adapter from 'enzyme-adapter-react-16'

//configure({adapter:new Adapter()});
configure({adapter: new Adapter()});
describe('Test suite for Dog app and it;s components',()=> {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  //test if 2 state elements are added at app mount
  it('creates only 1 elements in the start',()=>{
    var wrapper= shallow(<App />);
    expect(wrapper.find(".App")).length(1);
  });

  //test if initial state has two elements
  it('creates two items in dog items in state',()=> {
    var wrapper = mount(<App />);

    expect(wrapper.find('DogsApp')
                  .find('Dogs')
                  .find('DogItem')
    ).length(2);
  });

  //Test first dog's name is Princess
  it('creates first item in the list by name pricess', ()=>{

    var wrapper = mount(<DogsApp />);

    expect(wrapper.state().dogs[0].name=='Princess');

  });

  it('submits dog and it is added at position 3',()=>{
    const wrapper = mount(<DogsApp />);
    
    const addDog = wrapper.find('AddDog');

    addDog.find('#dogName').instance().value = "Lola";
     addDog.find('#imageURL').instance().value = "https://s-media-cache-ak0.pinimg.com/originals/51/ae/30/51ae30b78696b33a64661fa3ac205b3b.jpg";
     addDog.find('#dogBreed').instance().value="Labrador";

     const form = addDog.find('form');
     form.simulate('submit');

    //  expect(wrapper.find('Dogs')
    //                .find('DogItem')).length(2);


                   console.log(wrapper.state().dogs[2].name);
    
    expect(wrapper.state().dogs[2].name == 'Lssola');

  });

});