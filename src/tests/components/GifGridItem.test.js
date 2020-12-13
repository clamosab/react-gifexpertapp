// import {render} from '@testing-library/react'
import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGridItem } from '../../components/GifGridItem';


describe('Test de GifGridItem', () => {
    test('Debe de mostrar el componente correctamente', () => {
        const wrapper = shallow(
            <GifGridItem /> 
        );
            expect(wrapper).toMatchSnapshot();
    })
})
