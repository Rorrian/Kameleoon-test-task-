import { useParams } from 'react-router-dom'

export function ResultsPage() {
  const { testId } = useParams<{ testId: string }>()

  if (!testId) return <div>Идентификатор теста не задан</div>

  return (
    <div>
      <h1>ResultsPage</h1>

      <h2>Результаты теста #{testId}</h2>
    </div>
  )
}
