import { useNavigate, useParams } from 'react-router-dom'

import { ArrowIcon } from '@shared/icons'

export function ResultsPage() {
  const navigate = useNavigate()
  const { testId } = useParams<{ testId: string }>()

  if (!testId) return <div>Test ID not set</div>

  return (
    <div className="wrapper">
      <h1 className="title">Results</h1>
      <p className="subtitle">Order basket redesing</p>

      <button className="back-button" onClick={() => navigate(-1)}>
        <ArrowIcon width={8.83} height={16} />
        Back
      </button>
    </div>
  )
}
