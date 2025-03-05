import classNames from 'classnames'
import { useMemo } from 'react'

import { Test, Status } from '@shared/types'

import styles from './TestItem.module.scss'

export const BORDER_COLORS = ['#fe4848', '#e14165', '#8686ff', '#c2c2ff']

interface TestItemProps {
  test: Test
}

export const TestItem = ({ test }: TestItemProps) => {
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
        <a
          aria-label={`Finalize test ${name}`}
          href={`/finalize/${id}`}
          className={classNames('button', styles.button, styles.finalize)}
        >
          Finalize
        </a>
      ) : (
        <a
          aria-label={`View results for test ${name}`}
          href={`/results/${id}`}
          className={classNames('button', styles.button, styles.results)}
        >
          Results
        </a>
      )}
    </div>
  )
}
