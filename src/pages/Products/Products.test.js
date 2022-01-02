import React from 'react';
//import { render, screen, unmountComponentAtNode } from '@testing-library/react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import Products from './Products.tsx';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders product data', async () => {
  const fakeProduct = [{
    name: 'Super chair',
    price: 123,
    description: 'Comfortable chair',
    image: 'randomImage',
    category: 'Chair'
  }];

  await act( async () => {
    render(
      <BrowserRouter>
        <Products products={fakeProduct}/>
      </BrowserRouter>
      , container);
  });
  
  expect(container.querySelector('h2').textContent).toBe(fakeProduct[0].name);
  expect(container.querySelector('p').textContent).toBe(fakeProduct[0].description);
});
