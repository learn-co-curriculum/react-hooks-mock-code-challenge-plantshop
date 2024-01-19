import React from 'react';
import { render, fireEvent, waitFor, within } from '@testing-library/react';
import App from '../components/App'; // Assuming the main component is named 'App'
import '@testing-library/jest-dom';

describe('Plantsy App', () => {
  // Test 1: Display all plants when the app starts
  test('displays all plants on startup', async () => {
    const { findAllByTestId } = render(<App />);
    const plantItems = await findAllByTestId('plant-item');
    expect(plantItems).not.toHaveLength(0);
  });

 // Test 2: Add a new plant
test('adds a new plant when the form is submitted', async () => {
  const { getByPlaceholderText, findByText, getByText } = render(<App />);

  // Use getByPlaceholderText to select the input fields by their placeholder text
  fireEvent.change(getByPlaceholderText('Plant name'), { target: { value: 'New Plant' } });
  fireEvent.change(getByPlaceholderText('Image URL'), { target: { value: 'new_plant_image_url' } });
  fireEvent.change(getByPlaceholderText('Price'), { target: { value: '10' } }); // Add a value for price

  // Use getByText to select the submit button by its text content
  fireEvent.click(getByText('Add Plant'));

  const newPlant = await findByText('New Plant');
  expect(newPlant).toBeInTheDocument();
});

 // Test 3: Mark a plant as "sold out"
test('marks a plant as sold out', async () => {
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
    const { getByPlaceholderText, queryAllByTestId } = render(<App />);
    const searchInput = getByPlaceholderText('Type a name to search...');
    fireEvent.change(searchInput, { target: { value: 'Cactus' } });

    await waitFor(() => {
      const filteredPlants = queryAllByTestId('plant-item');
      expect(filteredPlants).not.toHaveLength(0);
    });
  });
});
