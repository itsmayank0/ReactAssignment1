import {render as renderer, unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Components/footer/Footer';
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
 
    test('Should have one h6 tag in Footer component', () => {
        renderer(<Footer />, element);
        const count = element.getElementsByTagName('p').length;
        expect(count).toBe(1);
    });

    test('Should have one div tag in Footer component', () => {
        renderer(<Footer />, element);
        const count = element.getElementsByTagName('div').length;
        expect(count).toBe(1);
    });

    test('Should have footdiv text in Footer', () => {
        render(<Footer />);
      expect(screen.getByTestId('footdiv')).toBeInTheDocument();
     });

     test('First div tag should have class name container',()=>{
        render(<Footer/>);
        expect(screen.getByTestId('footdiv')).toHaveClass('footer');
    });

    test('Footer should have the rights reserved text',()=>{
        render(<Footer/>);
        expect(screen.getByText('All Rights Reserved')).toBeInTheDocument();
    });

});
export default Footer;