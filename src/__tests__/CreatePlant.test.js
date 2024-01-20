import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../components/App';
import '@testing-library/jest-dom';

describe('Plantsy app', () => {
    test('adds a new plant when the form is submitted', async () => {
        global.setFetchResponse(global.basePlants)
        const { getByPlaceholderText, findByText, getByText } = render(<App />)
    
        global.setFetchResponse({name: 'foo', image: 'foo_plant_image_url', price: '10'})
    
        fireEvent.change(getByPlaceholderText('Plant name'), { target: { value: 'foo' } });
        fireEvent.change(getByPlaceholderText('Image URL'), { target: { value: 'foo_plant_image_url' } });
        fireEvent.change(getByPlaceholderText('Price'), { target: { value: '10' } });
        fireEvent.click(getByText('Add Plant'))
        
    
        const newPlant = await findByText('foo');
        expect(newPlant).toBeInTheDocument();
    
        global.setFetchResponse({name: 'bar', image: 'bar_plant_image_url', price: '5'})
    
        fireEvent.change(getByPlaceholderText('Plant name'), { target: { value: 'bar' } });
        fireEvent.change(getByPlaceholderText('Image URL'), { target: { value: 'bar_plant_image_url' } });
        fireEvent.change(getByPlaceholderText('Price'), { target: { value: '5' } });
        fireEvent.click(getByText('Add Plant'))
        
    
        const secondPlant = await findByText('bar');
        expect(secondPlant).toBeInTheDocument();
    });
})