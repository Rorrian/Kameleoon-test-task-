import styles from './Stub.module.scss'

interface StubProps {
  message: string
  onReset?: () => void
}

export const Stub = ({ message, onReset }: StubProps) => (
  <div className={styles.stub}>
    <p className={styles.text}>{message}</p>

    {onReset && (
      <button className="button" onClick={onReset}>
        Reset
      </button>
    )}
  </div>
)
