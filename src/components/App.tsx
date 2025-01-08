import { useQuery } from '@tanstack/react-query'
import { Result } from '../__mocks__/msw/handlers'
function App() {
  const data = useQuery({
    queryKey: ['test'],
    queryFn: () =>
      fetch('https://example.com/user').then((d) => d.json() as Promise<Result>)
  })

  return (
    <div className="bg-slate-300">
      <h1>Hello World</h1>
      {data.isLoading ? <div data-testid="loader">Loading</div> : null}
      {data.isSuccess ? (
        <div data-testid="data">{data.data.firstName}</div>
      ) : null}
    </div>
  )
}

export default App
