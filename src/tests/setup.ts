import * as matchers from '@testing-library/jest-dom/matchers'
import { expect } from 'vitest'
import { server } from '../__mocks__/msw/node'

expect.extend(matchers)

beforeAll(() => {
  server.listen({
    // Disallow any bypass requests from unit tests
    onUnhandledRequest: 'error'
  })

  // Some `createPortal` calls expect this element to exist and use it as their container
  const root = document.createElement('div')
  root.setAttribute('id', 'root')
  document.body.appendChild(root)
})

afterEach(() => {
  server.resetHandlers()
  server.events.removeAllListeners()
})

afterAll(() => {
  server.close()
})
