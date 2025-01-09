import { http, HttpResponse } from 'msw'

export const successResponse = {} as const

const errorResponse = {} as const

export type Response = typeof successResponse | typeof errorResponse

export const handlers = [
  http.get('/api/example', async () => {
    return HttpResponse.json(successResponse)
  })
]
