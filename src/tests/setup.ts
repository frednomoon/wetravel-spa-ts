import * as matchers from '@testing-library/jest-dom/matchers'
import { expect } from 'vitest'
import { server } from '../__mocks__/msw/node'

expect.extend(matchers)

beforeAll(() => {
  server.listen({
    // Disallow any bypass requests from unit tests
    onUnhandledRequest: 'error'
  })
})

afterEach(() => {
  server.resetHandlers()
  server.events.removeAllListeners()
})

afterAll(() => {
  server.close()
})
