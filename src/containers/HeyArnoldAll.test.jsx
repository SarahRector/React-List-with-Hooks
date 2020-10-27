import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HeyArnoldAll from './HeyArnoldAll';
import { getCharacter } from '../services/heyArnoldApi';

jest.mock('../services/heyArnoldApi.js');

describe('HeyArnoldAll Container', () => {
  it('displays a list of characters', async() => {
    getCharacter.mockResolvedValue([
      { name: 'Arnold', image: 'test.png' },
      { name: 'Stevie', image: 'test2.png' }
    ]);
    render(<HeyArnoldAll />);

    const characterList = await screen.findByTestId('characters');
    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  });
});
