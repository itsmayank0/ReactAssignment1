
import Card from '../Components/card/Card';
import '@testing-library/jest-dom';
import {render as renderer, unmountComponentAtNode } from 'react-dom';
import React from 'react';


describe('Testing Card Component', ()=>{
    let element;
    beforeEach(() => {
        element = document.createElement('div');
        document.body.appendChild(element);
    });
 
    afterEach(() => {
        unmountComponentAtNode(element);
        element.remove();
        element = null;
    });
 
    test('Should have one img tag in card component', () => {
        renderer(<Card />, element);
        const count = element.getElementsByTagName('img').length;
        expect(count).toBe(1);
    });

    test('Should have one h5 tag in card component', () => {
        renderer(<Card />, element);
        const count = element.getElementsByTagName('h5').length;
        expect(count).toBe(1);
    });

    test('Should have one p tag in card component', () => {
        renderer(<Card />, element);
        const count = element.getElementsByTagName('p').length;
        expect(count).toBe(2);
    });

    test('Should have one anchor tag in card component', () => {
        renderer(<Card />, element);
        const count = element.getElementsByTagName('a').length;
        expect(count).toBe(1);
    });

    test('Should have 3 div tag in card component', () => {
        renderer(<Card />, element);
        const count = element.getElementsByTagName('div').length;
        expect(count).toBe(3);
    });
    


});

export default Card;