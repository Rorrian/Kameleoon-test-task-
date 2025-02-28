import { useCallback, useEffect, useState } from 'react'

import { debounce } from '@shared/utils/debounce'

export const useSearch = (initValue: string) => {
  const [searchTerm, setSearchTerm] = useState(initValue)

  const debouncedCallback = useCallback(
    debounce((value: string) => setSearchTerm(value), 300),
    [],
  )

  useEffect(() => {
    if (searchTerm) {
      debouncedCallback(searchTerm)
    }

    return () => {
      debouncedCallback.cancel()
    }
  }, [searchTerm, debouncedCallback])

  return { searchTerm, setSearchTerm }
}
