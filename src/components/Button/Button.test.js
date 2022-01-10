/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from "enzyme";

import Button from './index';

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

it("renders button with a text", () => {
    act(() => {
        render(<Button text="Test" />, container);
    });
    expect(container.textContent).toBe("Test");
});

configure({adapter: new Adapter()});
it("renders button with a mock callback", () => {
    const mockCallback = jest.fn();
    const button = shallow((<Button callback={mockCallback} />));
    button.simulate('click');
    expect(mockCallback).toHaveBeenCalled();
});
