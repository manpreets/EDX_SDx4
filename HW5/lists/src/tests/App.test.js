import React from 'react'
import ReactDOM from 'react-dom'
import {expect} from 'chai'
import {mount, shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../App'
import AddItem from '../AddItem'
import AddList from '../AddList'
import List from '../List'
import Lists from '../Lists'
import ListItem from '../ListItem'
import { wrap } from 'module';



configure({adapter: new Adapter()});

describe('Test suit for HW 5 lists', () =>{

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('state length is 0', () => {
        var wrapper = mount(<App />);

        expect(wrapper.state().lists).length(0);
    });

    it('find one element with app class', () => {
        var wrapper = shallow(<App />);

        expect(wrapper.find('.App')).length(1);
    });

    it('find one AddItem element', ()=> {
        var wrapper = shallow(<App />);

        expect(wrapper.find('AddList')).length(1);
    });
    
    it('length of lists is changed to 1 after adding a list', () =>{

    });
});