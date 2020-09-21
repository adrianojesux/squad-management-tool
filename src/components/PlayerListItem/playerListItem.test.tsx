import React from 'react'

import { render, screen, waitForElement } from '@testing-library/react'
import PlayerListItem from './'
import { Player } from '../../interfaces/player'

describe('Test rendering Player List Item', () => {
  it('should render element List Item', async () => {
    const player = {
      player_name: 'Cristiano Ronaldo',
      nationality: 'BRA',
      age: 29,
    }

    const { getByTestId } = render(<PlayerListItem player={player as Player} />)

    const fieldName = await waitForElement(() => getByTestId('item-field-name'))
    const fieldAge = await waitForElement(() => getByTestId('item-field-age'))
    const fieldNationality = await waitForElement(() =>
      getByTestId('item-field-nationality')
    )

    expect(fieldName).toHaveTextContent('Cristiano Ronaldo')
    expect(fieldAge).toHaveTextContent('29')
    expect(fieldNationality).toHaveTextContent('BRA')
  })
})
