import React from 'react';
import { render } from '@testing-library/react';
import App from '../../components/App';
import '@testing-library/jest-dom';

describe('1st Deliverable', () => {
  test('displays all plants on startup', async () => {
    global.setFetchResponse(global.basePlants)
    let { findAllByTestId } = render(<App />);
    const plantItems = await findAllByTestId('plant-item');
    expect(plantItems).toHaveLength(global.basePlants.length);

    const plantNames = plantItems.map((item) => item.querySelector('h4').textContent);
    const basePlantNames = global.basePlants.map((plant) => plant.name);
    expect(plantNames).toEqual(basePlantNames);

    const plantImages = plantItems.map((item) => item.querySelector('img').src.split('/')[-1]);
    const basePlantImages = global.basePlants.map((plant) => plant.image.split('/')[-1]);
    expect(plantImages).toEqual(basePlantImages);

    const plantPrices = plantItems.map((item) => item.querySelector('p').textContent);
    const basePlantPrices = global.basePlants.map((plant) => 'Price: ' + plant.price.toString());
    expect(plantPrices).toEqual(basePlantPrices);
  });

  test('plants aren\'t hardcoded', async () => {    
    global.setFetchResponse(global.alternatePlants)
    let { findAllByTestId } = render(<App />);
    const plantItems = await findAllByTestId('plant-item');
    expect(plantItems).toHaveLength(global.alternatePlants.length);

    const plantNames = plantItems.map((item) => item.querySelector('h4').textContent);
    const basePlantNames = global.alternatePlants.map((plant) => plant.name);
    expect(plantNames).toEqual(basePlantNames);

    const plantImages = plantItems.map((item) => item.querySelector('img').src.split('/')[-1]);
    const basePlantImages = global.alternatePlants.map((plant) => plant.image.split('/')[-1]);
    expect(plantImages).toEqual(basePlantImages);

    const plantPrices = plantItems.map((item) => item.querySelector('p').textContent);
    const basePlantPrices = global.alternatePlants.map((plant) => 'Price: ' + plant.price.toString());
    expect(plantPrices).toEqual(basePlantPrices);
  });
})