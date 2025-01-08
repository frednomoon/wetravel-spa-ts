import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'components/App'

import Providers from 'Providers'

// import { server } from './mocks/node'

// server.listen()

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <Providers>
    <App />
  </Providers>
)
