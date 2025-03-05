/**
 * Кастомный метод-дебаунсер
 * @template T - generic-тип callback-функции
 * @param callback - функция для добавления дебаунса
 * @param delay - время задержки в мс
 * @returns Функция с эффектом дебаунса + методом cancel(), аналогичная исходной
 * */
export const debounce = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number,
): ((...args: Parameters<T>) => void) & { cancel: () => void } => {
  if (delay < 0) throw new Error('Delay must be a positive number')

  let timeoutId: ReturnType<typeof setTimeout> | null = null

  const debouncedFn = (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      callback(...args)
    }, delay)
  }

  debouncedFn.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
  }

  return debouncedFn
}
