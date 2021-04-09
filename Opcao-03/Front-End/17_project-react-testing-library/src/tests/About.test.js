import React from 'react';
import { render } from '@testing-library/react';
import About from '../components/About';

describe('Testando o arquivo About.js', () => {
  let text; let title; let paragraph; let image;
  beforeEach(() => {
    const { getByText, container } = render(<About />);
    text = getByText('About Pokédex');
    title = container.querySelectorAll('h2');
    paragraph = container.querySelectorAll('p');
    image = container.querySelector('img');
  });

  it('Testando se a página contém as informações sobre a Pokédex.', () => {
    expect(text).toBeInTheDocument();
  });

  it('Testando se a página contém um heading h2 com o texto About Pokédex.', () => {
    expect(title[0]).toHaveTextContent('About Pokédex');
    expect(title[0]).toBeInTheDocument();
    expect(title.length).toBe(1);
  });

  it('Testando se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    const size = 2;
    expect(paragraph).toHaveLength(size);
    const hasText = paragraph[0].innerHTML && paragraph[1].innerHTML ? 1 : false;
    expect(hasText).toBe(1);
  });

  it('Testando se a página contém a imagem.', () => {
    expect(image).toBeInTheDocument();
    expect(image.src).toBe(
      'https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
    );
  });
});
