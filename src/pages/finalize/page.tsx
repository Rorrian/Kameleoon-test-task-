import { useParams } from 'react-router-dom'

export function FinalizePage() {
  const { testId } = useParams<{ testId: string }>()

  if (!testId) return <div>Идентификатор теста не задан</div>

  return (
    <div>
      <h1>FinalizePage</h1>

      <h2>Финализация для теста #{testId}</h2>
    </div>
  )
}
