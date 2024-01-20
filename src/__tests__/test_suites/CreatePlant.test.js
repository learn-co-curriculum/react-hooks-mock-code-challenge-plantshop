import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../../components/App';
import '@testing-library/jest-dom';

describe('2nd Deliverable', () => {
    test('adds a new plant when the form is submitted', async () => {
        global.setFetchResponse(global.basePlants)
        const { getByPlaceholderText, findByText, getByText } = render(<App />)

        const firstPlant = {name: 'foo', image: 'foo_plant_image_url', price: '10'}
    
        global.setFetchResponse(firstPlant)
    
        fireEvent.change(getByPlaceholderText('Plant name'), { target: { value: firstPlant.name } });
        fireEvent.change(getByPlaceholderText('Image URL'), { target: { value: firstPlant.image } });
        fireEvent.change(getByPlaceholderText('Price'), { target: { value: firstPlant.price } });
        fireEvent.click(getByText('Add Plant'))

        expect(fetch).toHaveBeenCalledWith("http://localhost:6001/plants", {
            method: "POST",
            headers: {
              "Content-Type": "Application/JSON",
            },
            body: JSON.stringify(firstPlant),
        })
    
        const newPlant = await findByText('foo');
        expect(newPlant).toBeInTheDocument();

        const secondPlant = {name: 'bar', image: 'bar_plant_image_url', price: '5'}
    
        global.setFetchResponse(secondPlant)
    
        fireEvent.change(getByPlaceholderText('Plant name'), { target: { value: secondPlant.name } });
        fireEvent.change(getByPlaceholderText('Image URL'), { target: { value: secondPlant.image } });
        fireEvent.change(getByPlaceholderText('Price'), { target: { value: secondPlant.price } });
        fireEvent.click(getByText('Add Plant'))
    
        expect(fetch).toHaveBeenCalledWith("http://localhost:6001/plants", {
            method: "POST",
            headers: {
              "Content-Type": "Application/JSON",
            },
            body: JSON.stringify(secondPlant),
        })

        const nextPlant = await findByText('bar');
        expect(nextPlant).toBeInTheDocument();
    });
})