// __tests__/layout-test.js

import React from "react";
import { create } from "react-test-renderer";
import ServiceMedia from './../components/layout';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsonData from "./../components/media.json";

Enzyme.configure({ adapter: new Adapter() });
const mockFn = jest.fn();

describe("ServiceMedia", () => {

    test("renders", () => {
        const wrapper = shallow(<ServiceMedia />);
        expect(wrapper.exists()).toBe(true);
    })
    test("should call mock function when button open adv is clicked", () => {

        const wrapper = shallow(<ServiceMedia start={openNav} />);
        wrapper.simulate('click');
        expect(mockFn).toHaveBeenCalledWith('document.getElementById("mySidenav").style.width = "381px"');

        const wrapper = shallow(<ServiceMedia start={closeNav} />);
        wrapper.simulate('click');
        expect(mockFn).toHaveBeenCalledWith('document.getElementById("mySidenav").style.width = "0px"');
    });
});

test("Baueradvertising data-feed json", () => {
    const wrapper = shallow(<jsonData />);
    expect(wrapper).toMatchSnapshot();
});

