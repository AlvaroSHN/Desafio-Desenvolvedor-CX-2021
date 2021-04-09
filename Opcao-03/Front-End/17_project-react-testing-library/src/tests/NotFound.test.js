import React from 'react';
import { cleanup } from '@testing-library/react';
import renderWithRouter from '../services/renderWithRouter';
import NotFound from '../components/NotFound';

afterEach(cleanup);

describe('Testando o arquivo NotFound.js', () => {
  it('Testar se página contém h2 com o texto Page requested not found', () => {
    const { getByText, container } = renderWithRouter(<NotFound />);
    const title = container.querySelectorAll('h2');
    const text = getByText('Page requested not found');
    expect(title.length).toBe(1);
    expect(text).toBeInTheDocument();
  });

  it('Testar se página mostra a imagem ', () => {
    const { container } = renderWithRouter(<NotFound />);
    const img = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    expect(container.querySelector('img').src).toBe(img);
  });
});
