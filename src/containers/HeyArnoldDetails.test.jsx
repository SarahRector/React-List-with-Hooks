import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HeyArnoldDetails from './HeyArnoldDetails';
import { getOneCharacter } from '../services/heyArnoldApi';

jest.mock('../services/heyArnoldApi.js');

describe('HeyArnoldDetails Container', () => {
  it('displays character details', async() => {
    getOneCharacter.mockResolvedValue(
      { name: 'Arnold', image: 'test.png' }
    );
    render(<HeyArnoldDetails
      match={{
        params: { characterName: 'Arnold' }
      }}
    />);

    const characterDetail = await screen.findByTestId('details');
    return waitFor(() => {
      expect(characterDetail).not.toBeEmptyDOMElement();
    });
  });
});
