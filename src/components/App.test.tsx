import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import Providers from 'Providers'
import { result } from '__mocks__/msw/handlers'

describe('<App />', () => {
  it('should render the App', async () => {
    const { container } = render(<App />, {
      wrapper: Providers
    })
    const user = userEvent.setup()

    expect(
      screen.getByRole('heading', {
        level: 1
      })
    ).toBeInTheDocument()

    user.click(container)

    expect(screen.getByText(/Hello World/i)).toBeInTheDocument()

    expect(screen.getByTestId('loader').innerText).toBe('Loading')

    await screen.findByTestId('data')
    expect(screen.getByTestId('data').innerText).toBe(result.firstName)
  })
})
