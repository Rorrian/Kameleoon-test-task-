import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { useMemo } from 'react'

import { Test, Status } from '@shared/types'

import styles from './TestItem.module.scss'

const BORDER_COLORS = ['#fe4848', '#e14165', '#8686ff', '#c2c2ff']

interface TestItemProps {
  test: Test
}

export const TestItem = ({ test }: TestItemProps) => {
  const navigate = useNavigate()

  const { id, name, type, status, siteUrl } = test

  const borderColor = useMemo(
    () => BORDER_COLORS[Math.floor(Math.random() * BORDER_COLORS.length)],
    [],
  )

  return (
    <div
      className={styles.testItem}
      style={{
        borderColor: borderColor,
      }}
    >
      <span className={styles.name}>{name}</span>
      <span>{type}</span>
      <span
        className={classNames(styles.status, styles[test.status.toLowerCase()])}
      >
        {status}
      </span>
      <span>{siteUrl ?? 'Site not set'}</span>

      {status === Status.DRAFT ? (
        <button
          className={classNames('button', styles.button, styles.finalize)}
          onClick={() => navigate(`/finalize/${id}`)}
        >
          Finalize
        </button>
      ) : (
        <button
          className={classNames('button', styles.button, styles.results)}
          onClick={() => navigate(`/results/${id}`)}
        >
          Results
        </button>
      )}
    </div>
  )
}
