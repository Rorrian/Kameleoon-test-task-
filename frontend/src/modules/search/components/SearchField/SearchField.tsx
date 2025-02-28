import { ReactNode } from 'react'
import classNames from 'classnames'

import styles from './SearchField.module.scss'

interface SearchFieldProps {
  className?: string
  searchTerm: string
  setSearchTerm: (value: string) => void
  startContent: ReactNode
  endContent: ReactNode
}

export const SearchField = ({
  className,
  searchTerm,
  setSearchTerm,
  startContent,
  endContent,
}: SearchFieldProps) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.inner}>
        {startContent}

        <input
          className={styles.input}
          placeholder="What test are you looking for?"
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className={styles.endContent}>{endContent}</div>
    </div>
  )
}
