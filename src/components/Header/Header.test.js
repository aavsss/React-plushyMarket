import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Link, MemoryRouter as Router } from "react-router-dom";
import mount from "enzyme/build/mount";
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

// Component
import Header from './index';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exit
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

configure({adapter: new Adapter()});
it("renders header with text - PlushyMarket", () => {
    act(() => {
        const wrapper = shallow(
            <Router>
                <Header />
            </Router>
        );
        expect(wrapper.find(Link)).toBeTruthy();
    });
});
