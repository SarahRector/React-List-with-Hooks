import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';

const testArray = [
  { name: 'Arnold', image: 'test.png' },
  { name: 'Stevie', image: 'test2.png' } 
];

describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders Character List', () => {
    const { asFragment } = render(<CharacterList
      characters={testArray}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
