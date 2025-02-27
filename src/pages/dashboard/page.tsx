import { useNavigate } from 'react-router-dom'

export function DashboardPage() {
  const navigate = useNavigate()

  const redirectToResults = (testId: string) => navigate(`/results/${testId}`)
  const redirectToFinalize = (testId: string) => navigate(`/finalize/${testId}`)

  const testId = '1'

  return (
    <div>
      <h1>DashboardPage</h1>

      <button onClick={() => redirectToResults(testId)}>Results</button>
      <button onClick={() => redirectToFinalize(testId)}>Finalize</button>
    </div>
  )
}
