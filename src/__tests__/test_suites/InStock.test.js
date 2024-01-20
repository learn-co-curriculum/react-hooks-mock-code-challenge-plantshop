import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import App from '../../components/App';
import '@testing-library/jest-dom';

describe('3rd Deliverable', () => {
  test('marks a plant as sold out', async () => {
    global.setFetchResponse(global.basePlants)

    const { findAllByTestId, findByText } = render(<App />);

    // Get all plant items
    const plantItems = await findAllByTestId('plant-item');
    expect(plantItems).toHaveLength(basePlants.length);

    // Select the first plant item
    const firstPlantItem = plantItems[0];

    // Find and click the "In Stock" button within the first plant item
    const inStockButton = within(firstPlantItem).getByText('In Stock');
    fireEvent.click(inStockButton);

    // Wait for the "Out of Stock" button to appear and verify its presence
    const outOfStockButton = await findByText('Out of Stock');
    expect(outOfStockButton).toBeInTheDocument();
  });
})