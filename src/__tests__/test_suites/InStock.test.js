import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import App from '../../components/App';
import '@testing-library/jest-dom';

describe('3rd Deliverable', () => {
  test('marks a plant as sold out', async () => {
    global.setFetchResponse(global.basePlants)

    const { findAllByTestId, findByText } = render(<App />);

    const plantItems = await findAllByTestId('plant-item');
    expect(plantItems).toHaveLength(basePlants.length);

    const firstPlantItem = plantItems[0];

  
    const inStockButton = within(firstPlantItem).getByText('In Stock');
    fireEvent.click(inStockButton);

    const outOfStockButton = await findByText('Out of Stock');
    expect(outOfStockButton).toBeInTheDocument();
  });
})