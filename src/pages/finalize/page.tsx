import { useNavigate, useParams } from 'react-router-dom'

import { ArrowIcon } from '@shared/icons'

export function FinalizePage() {
  const navigate = useNavigate()
  const { testId } = useParams<{ testId: string }>()

  if (!testId) return <div>Test ID not set</div>

  return (
    <div className="wrapper">
      <h1 className="title">Finalize</h1>
      <p className="subtitle">Spring promotion</p>

      <button className="back-button" onClick={() => navigate(-1)}>
        <ArrowIcon width={8.83} height={16} />
        Back
      </button>
    </div>
  )
}
