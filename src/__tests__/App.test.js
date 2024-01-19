import React from 'react';
import { render, fireEvent, waitFor, within, act } from '@testing-library/react';
import App from '../components/App';
import '@testing-library/jest-dom';

const basePlants = [
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  },
  {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98
  },
  {
    "id": 3,
    "name": "Pilea peperomioides",
    "image": "./images/pilea.jpg",
    "price": 5.99
  },
  {
    "id": 4,
    "name": "Pothos",
    "image": "./images/pothos.jpg",
    "price": 12.11
  },
  {
    "id": 5,
    "name": "Jade",
    "image": "./images/jade.jpg",
    "price": 10.37
  },
  {
    "id": 6,
    "name": "Monstera Deliciosa",
    "image": "./images/monstera.jpg",
    "price": 25.99
  },
  {
    "id": 7,
    "name": "Fiddle Leaf Fig",
    "image": "./images/fiddle-leaf-fig.jpg",
    "price": 55
  }
]

function setFetchResponse(val) {
  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(val)
  }))
}

describe('Plantsy App', () => {
  // Test 1: Display all plants when the app starts
  test('displays all plants on startup', async () => {
    setFetchResponse(basePlants)
    const { findAllByTestId } = render(<App />);
    const plantItems = await findAllByTestId('plant-item');
    expect(plantItems).not.toHaveLength(0);
    expect(plantItems).toHaveLength(basePlants.length);
  });

 // Test 2: Add a new plant

  test('adds a new plant when the form is submitted', async () => {
    setFetchResponse(basePlants)
    const { getByPlaceholderText, findByText, getByText } = render(<App />)
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({name: 'foobar', image: 'new_plant_image_url', price: '10', id: 8})
    }))
    fireEvent.change(getByPlaceholderText('Plant name'), { target: { value: 'foobar' } });
    fireEvent.change(getByPlaceholderText('Image URL'), { target: { value: 'new_plant_image_url' } });
    fireEvent.change(getByPlaceholderText('Price'), { target: { value: '10' } });
    fireEvent.click(getByText('Add Plant'))
    
    setFetchResponse({name: 'foobar', image: 'new_plant_image_url', price: '10'})

    const newPlant = await findByText('foobar');
    expect(newPlant).toBeInTheDocument();
  });

  //  Test 3: Mark a plant as "sold out"
  test('marks a plant as sold out', async () => {
    setFetchResponse(basePlants)

    const { findAllByTestId, findByText } = render(<App />);

    // Get all plant items
    const plantItems = await findAllByTestId('plant-item');
    expect(plantItems.length).toBeGreaterThan(0); // Ensure there are plants rendered

    // Select the first plant item
    const firstPlantItem = plantItems[0];

    // Find and click the "In Stock" button within the first plant item
    const inStockButton = within(firstPlantItem).getByText('In Stock');
    fireEvent.click(inStockButton);

    // Wait for the "Out of Stock" button to appear and verify its presence
    const outOfStockButton = await findByText('Out of Stock');
    expect(outOfStockButton).toBeInTheDocument();
  });

  // Test 4: Search for plants by name
  test('filters plants by name on search', async () => {
    setFetchResponse(basePlants)
    const { getByPlaceholderText, queryAllByTestId } = render(<App />);
    const searchInput = getByPlaceholderText('Type a name to search...');
    fireEvent.change(searchInput, { target: { value: 'aloe' } });

    await waitFor(() => {
      const filteredPlants = queryAllByTestId('plant-item');
      expect(filteredPlants).toHaveLength(1);
    });
    
    fireEvent.change(searchInput, { target: { value: 'p' } });
    
    await waitFor(() => {
      const filteredPlants = queryAllByTestId('plant-item');
      expect(filteredPlants).toHaveLength(3);
    });
  });
});
