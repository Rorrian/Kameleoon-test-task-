import { ReactNode } from 'react'
import classNames from 'classnames'

import styles from './SearchField.module.scss'

interface SearchFieldProps {
  className?: string
  startContent: ReactNode
  endContent: ReactNode
  searchTerm: string
  setSearchTerm: (value: string) => void
}

export const SearchField = ({
  className,
  startContent,
  endContent,
  searchTerm,
  setSearchTerm,
}: SearchFieldProps) => {
  return (
    <div className={classNames(styles.inputWrapper, className)}>
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
