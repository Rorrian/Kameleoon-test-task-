import { useCallback, useState } from 'react'

import { debounce } from '@shared/utils/debounce'

export const useSearch = (initValue: string) => {
  const [searchTerm, setSearchTerm] = useState(initValue)

  const debouncedSetSearchTerm = useCallback(
    debounce((value: string) => setSearchTerm(value), 50),
    [],
  )

  const handleSearchChange = useCallback(
    (value: string) => {
      debouncedSetSearchTerm(value)
    },
    [debouncedSetSearchTerm],
  )

  return { searchTerm, setSearchTerm: handleSearchChange }
}
