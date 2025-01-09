import { render } from '@testing-library/react'

import App from './App'
import Providers from 'Providers'

describe('<App />', () => {
  it('should return weather result for London', async () => {
    render(<App />, {
      wrapper: Providers
    })
    // const user = userEvent.setup()
  })
})
